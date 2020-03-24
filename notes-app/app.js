const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

// Create Add Command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder:{
    title:{
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body:{
      describe: 'Note Content'
    }
  },
  handler: (argv) => notes.addNote(argv.title, argv.body)
})

// Create Remove Command
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title:{
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => notes.removeNote(argv.title)
})

// Create List Command
yargs.command({
  command: 'list',
  describe: 'List Notes',
  handler: () => notes.listNotes()
})

// Create Read Command
yargs.command({
  command: 'read',
  describe: 'Read Note',
  builder:{
    title:{
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => notes.readNote(argv.title)
})

yargs.parse()