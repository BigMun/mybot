const Quickcord = require('quickcord')

module.exports = {
    aliases: ['dungle', 'bungle'],
    callback: (res, args) => {
        const member = res.mentions.members.first()
        
        res.delete(500);
    
        const embed = Quickcord.Embed({
            title: `${member.user.tag} is being dungled`,
            description: 'Dutty bomba',
        });
    
    
        res.channel.send(embed)
    }
};