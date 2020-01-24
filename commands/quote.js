module.exports = {
    aliases: ['quote', 'q'],
    callback: (res, args) => {
        res.delete(500);
        
        fetch('https://api.quotable.io/random')
         .then(async response => {
             if (response.ok) {
             const { content, author } = await response.json();
                
             res.channel.send(`${content} - **${author}**`);
             }
         })
         
     .catch(console.error);
    }
};