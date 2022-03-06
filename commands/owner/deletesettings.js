module.exports = {
    description: 'Deletes all the settings for the bot (PERMANENT)',
    aliases: ['deleteset'],
    usage: 'deletesettings'
}

module.exports.run = (client, message, args) => {
    if (message.author.id !== client.conf.settings.BotOwnerDiscordID) return message.channel.send(new client.embed().setDescription(`Excuse me, you are not my owner.`).setFooter(`${message.guild.name} | Made by the devs`, message.guild.iconURL({ dynamic: true })))
    client.settings.deleteAll()
}