module.exports = {
    aliases: 'pm',
    callback: (res, args) => {
        const member = message.mentions.members.first()
        
        args.shift()
        
        const u_message = args.join(' ')
    
        member.send(u_message)
        .then(sent => {
    
            sent.delete(1000);
    
            message.channel.send('Message sent')
                .then(message => {
                    message.delete(5000)
                })
        })
        .catch(() => {
            message.channel.send('Message failed')
                .then(message => {
                    message.delete(5000)
                })
        });
        
        message.delete(500)
    }
};