const fs = require('fs')
const chalk = require('chalk')

const successMsg = function(message) {
  return console.log(chalk.green.bgBlack.bold(message))
}
const errorMsg = function(message) {
  return console.log(chalk.red.bgBlack.bold(message))
}

const checkNote = function(title){
  const file = `${__dirname}/${title}.txt`
  if(!fs.existsSync(file)){
    return false
  }

  return file
}

const listNotes = function(){
  let isNote = false;
  
  fs.readdirSync(__dirname).forEach(function(note){
    if(note.endsWith('.txt')){
      successMsg(note)
      isNote = true;
    }
  })

  if(!isNote){
    return errorMsg('There is No Notes!')
  }
}

const addNote = function(title, body=""){
  return fs.writeFileSync(`${title}.txt`, body)
}

const removeNote = function(title){
  if(!checkNote(title)){
    return errorMsg('File Not Found!')
  }

  fs.unlinkSync(checkNote(title))
  return successMsg('Note Deleted!') 
}

const readNote = function(title){
  if(!checkNote(title)){
    return errorMsg('File Not Found')
  }

  return console.log(fs.readFileSync(checkNote(title), 'utf8'))

}

module.exports = { listNotes, addNote, removeNote, readNote }