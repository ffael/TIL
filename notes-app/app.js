const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

// Create Add Command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function(){
    notes.addNote(yargs.argv.title, yargs.argv.body)
  }
})

// Create Remove Command
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  handler: function(){
    notes.removeNote(yargs.argv.title)
  }
})

// Create List Command
yargs.command({
  command: 'list',
  describe: 'List Notes',
  handler: function(){
    notes.listNotes()
  }
})

// Create Read Command
yargs.command({
  command: 'read',
  describe: 'Read Note',
  handler: function(){
    notes.readNote(yargs.argv.title)
  }
})
console.log(yargs.argv)