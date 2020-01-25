const Quickcord = require('quickcord');
require('dotenv').config();
const command = new Quickcord.Client(process.env.TOKEN, '!');

command.loadCommands('./commands');

//Database

const db = require('./db')

command.on('message', message =>{
    
    const content = message;
    const member = message.member.user.tag
    const isbot = message.member.user.bot
    const channel = message.channel.name
     
    const data = {
        content: content,
        member: member,
        isbot: isbot,
        channel: channel
    }
    
    db.query('INSERT INTO messages SET ?', [data], (err, rows, fields) =>{
        if(err) console.error(err);
    
        console.log(rows);
    })
})