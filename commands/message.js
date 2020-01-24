module.exports = {
    disabled: 'true',
    aliases: 'message',
    callback: (res, args) => {
        res.delete()
    
        const message = args.join(' ')
    
        res.channel.send(message)
    }
};