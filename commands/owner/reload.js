module.exports = {
    description: 'Lets you reload a command.',
    aliases: ['refresh'],
    usage: 'reload <Command>'
}

module.exports.run = async(client, message, args) => {
    if (message.author.id !== client.conf.settings.BotOwnerDiscordID) return message.channel.send(new client.embed().setDescription(`Excuse me, you are not my owner.`).setFooter(`${message.guild.name} | Made by the devs`, message.guild.iconURL({ dynamic: true })))

    const command = client.commands.get((args[0] || '').toLowerCase())
    if (!command) return message.channel.send(new client.embed().setDescription(`Please provide me a command to reload.`).setFooter(`${message.guild.name} | Made by the devs`, message.guild.iconURL({ dynamic: true })))

    try {
        delete require.cache[require.resolve(`../${command.category}/${args[0].toLowerCase()}.js`)]
        client.commands.set(args[0].toLowerCase(), {...require(`../${command.category}/${args[0].toLowerCase()}.js`), category: command.category })
    } catch (e) {
        message.channel.send('An error has occured! You shouldnt be seeing this.')
        console.log(e)
    }
}