const chalk = require('chalk')
const yargs = require('yargs')
// console.log(chalk.bold.red('error'));
// const validator = require('validator')

const notes = require('./notes.js')

// const msg = getNote()

// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Add file')
// }else if (command === 'remove') {
//     console.log('Remove file')
// }
//customizin yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'Add a new role',
    builder: {
        title: {
            describe: 'Note a title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
//create remove command
yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command:'list',
    describe:'List a note',
    handler() {
        notes.listNotes()
    }
})

//create read command

yargs.command({
    command:'read',
    describe:'Read a note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    }, 
    handler(argv) {
        notes.readNote(argv.title)
    }
})
// console.log(process.argv)
yargs.parse()
// console.log(yargs.argv)