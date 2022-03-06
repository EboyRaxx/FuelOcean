module.exports = {
    description: 'Lets you turnoff the bot via discord.',
    aliases: ['selfdestruct', 'shutdown'],
    usage: 'turnoff'
}

module.exports.run = async(client, message, args) => {
    if (message.author.id !== client.conf.settings.BotOwnerDiscordID) return message.channel.send(new client.embed().setDescription(`Excuse me, you are not my owner.`).setFooter(`${message.guild.name} | Made by the devs`, message.guild.iconURL({ dynamic: true })))

    message.channel.send(':robot: Going to sleep, I will miss you for the time being :blue_heart: ').then(() => {
        client.destroy()
    })
}