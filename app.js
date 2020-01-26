const Quickcord = require('quickcord');
require('dotenv').config();
const command = new Quickcord.Client(process.env.TOKEN, '!');

command.loadCommands('./commands');

//Database

const db = require('./db')

command.on('message', message =>{
    
    const content = message;
    const tag = message.member.user.tag;
    const isbot = message.member.user.bot;
    const channel = message.channel.name;
    const userid = message.member.user.id;
    const username = message.member.user.username;
    const nickname = message.member.nickname;
    const discriminator = message.member.user.discriminator
    const avatarURL = message.member.user.avatarURL

    const data = {
        content: content,
        tag: tag,
        isbot: isbot,
        channel: channel,
        userid: userid,
        username: username,
        nickname: nickname,
        discriminator: discriminator,
        avatarURL: avatarURL
    }
    
    db.query('INSERT INTO messages SET ?', [data], (err, rows, fields) =>{
        if(err) console.error(err);
    
        console.log(rows);
    })
})