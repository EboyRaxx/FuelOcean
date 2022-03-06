module.exports = {
    description: 'Lets you restart the bot via discord.',
    aliases: ['bootup'],
    usage: 'restart'
}

module.exports.run = async(client, message, args) => {
    if (message.author.id !== client.conf.settings.BotOwnerDiscordID) return message.channel.send(new client.embed().setDescription(`Excuse me, you are not my owner.`).setFooter(`${message.guild.name} | Made by the devs`, message.guild.iconURL({ dynamic: true })))

    message.channel.send(':robot: Restarting.').then(() => {
        client.destroy()
        client.login(client.conf.settings.token)
    })
}