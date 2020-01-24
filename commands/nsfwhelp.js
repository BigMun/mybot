module.exports = {
    aliases: ['nsfwhelp','nsfwh'],
    callback: (res, args) => {
        const embed = Quickcord.Embed({
            title:'Types',
            description:'Here you go babycakes',
            color:'#ff1100',
            fields:[
                { name: 'pgif', value: 'its a gif', inline: false},
                { name: '4k', value: '4k image', inline: false},
                { name: 'anal', value: 'bunghole action!', inline: false},
                { name: 'gonewild', value: 'crazyiness', inline: false},
                { name: 'ass', value: 'Batty', inline: false},
                { name: 'pussy', value: 'pumpum', inline: false},
                { name: 'thigh', value: 'legs :)', inline: false}
             ]
        })

        res.channel.send(embed)
    }
};