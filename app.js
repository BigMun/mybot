const Quickcord = require('quickcord');
const dotenv = require('dotenv').config()
const command = new Quickcord.Client(process.env.TOKEN, '!');

command.loadCommands('./commands', files =>{
    files.map(file => console.log(`${file.name} loaded`));
})