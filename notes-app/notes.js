const fs = require('fs')
const chalk = require('chalk')

const successMsg = function(message) {
  return console.log(chalk.green.bgBlack.bold(message))
}
const errorMsg = function(message) {
  return console.log(chalk.red.bgBlack.bold(message))
}

const addNote = function(title, body){
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function(note){
    return note.title === title
  })
  if(duplicateNotes != 0){
    return errorMsg('Title Must Be Unique!')
  }
  notes.push({
    title,
    body
  })

  saveNotes(notes)
  successMsg('New Note Added!')
}

const removeNote = function(title){
  const notes = loadNotes()
  const keepNotes = notes.filter(function(note){
    return note.title !== title
  })
  saveNotes(keepNotes)
  if(keepNotes.length !== notes.length){
    successMsg('Note Removed!')
  }else{
    errorMsg('Note Not Found!')
  }
}

const loadNotes = function(){
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataString = dataBuffer.toString()
    return JSON.parse(dataString)

  }catch(e){
    return []
  }
}

const saveNotes = function(notes){
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = { addNote, removeNote }