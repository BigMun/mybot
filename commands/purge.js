module.exports = {
    aliases: 'purge',
    callback: (res, args) => {
        res.delete();

        if(args.length !== 1) {
            return res.reply("Please provide an amount")
            .then(message => deleteMessage(message, 2500));
        }
    
        if(isNaN(args[0])) {
            return res.reply("Parameter must be a number")
            .then(message => deleteMessage(message, 2500));
        }
    
        res.channel.bulkDelete(args[0])
        .then(() => {
            res.reply(`Successfully deleted ${args[0]} messages!`)
            .then(message => deleteMessage(message, 5000));
        })
        .catch(err => {
            res.reply("Could not delete messages older than 14 days")
            .then(message => deleteMessage(message, 2500));
        })
    }
};