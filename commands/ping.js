module.exports = {
    aliases: 'ping',
    callback: (res, args) => {
        res.channel.send('pong!')
    }
};