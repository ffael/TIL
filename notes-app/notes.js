const fs = require('fs')
const chalk = require('chalk')

const successMsg = function(message) {
  return console.log(chalk.green.bgBlack.bold(message))
}
const errorMsg = function(message) {
  return console.log(chalk.red.bgBlack.bold(message))
}

const checkNote = function(title){
  const file = `${__dirname}/notes/${title}.json`
  if(!fs.existsSync(file)){
    return false
  }

  return file
}

const listNotes = function(){
  let isNote = false;
  
  fs.readdirSync(`${__dirname}/notes/`).forEach(function(note){
    if(note.endsWith('.json')){
      successMsg(note)
      isNote = true;
    }
  })

  if(!isNote){
    return errorMsg('There is No Notes!')
  }
}

const addNote = function(title, body=""){
  const note = {
    title,
    body
  }
  const data = JSON.stringify(note)
  if(!fs.existsSync('notes/')){
    fs.mkdirSync('notes')
  }
  return fs.writeFileSync(`${__dirname}/notes/${title}.json`, data)
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
  const data = JSON.parse(fs.readFileSync(checkNote(title)))

  return console.log(data)

}

module.exports = { listNotes, addNote, removeNote, readNote }