const fetch = require('node-fetch');
const math = require('mathjs')

const categories = ["pgif", "4k","anal", "gonewild", "ass", "pussy", "thigh"]

module.exports = {
    aliases: 'nsfw',
    callback: (res, args) => {
        res.delete();

        let type = args[0];
        
        if(type == undefined) {
            type = categories[Math.floor(Math.random() * categories.length)];
        }

        const api = `https://nekobot.xyz/api/image?type=${type}`;
       
        fetch(api)
        .then(async response => {
            if (response.ok) {
            
                const { message } = await response.json();
                
                res.channel.send({ files: [message] });
            }
        })
        
    .catch(console.error);
    }
};