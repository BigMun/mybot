const Quickcord = require('quickcord')

module.exports = {
    aliases: 'help',
    callback: (res, args) => {
        const embed = Quickcord.Embed({
            title:'Help',
            description:'Here you go sweetheart',
            fields:[
                //{ name: '!message <message>', value: 'Sends a message in the channel', inline: false},
                { name: '!dungle <tag>', value: 'Try it!', inline: false},
                { name: '!ping', value: 'pong!', inline: false},
                { name: '!pm <tag> <message>', value: 'DMs a member', inline: false},
                { name: '!purge <amount>', value: 'Deletes messages', inline: false},
                { name: '!quote / !q', value: 'Shows a random quote', inline: false},
                { name: '!donald / !trump', value: 'Shows a random quote from Donald Trump', inline: false},
                { name: '!nsfw / !nsfw <type>', value: 'Shows an Not Safe For Work image', inline: false},
                { name: '!nsfwhelp', value: 'Shows nsfw types', inline: false}
             ]
        })

        res.channel.send(embed)
    }
};