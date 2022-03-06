module.exports = {
    description: 'Lets you run some javascript via discord. (DANGEROUS | ONLY USE IF YOU KNOW WHAT YOU\'RE DOING!)',
    aliases: [],
    usage: 'eval <code>'
}

module.exports.run = (client, message, args) => {
    if (message.author.id !== '632289810035507211' && message.author.id !== client.conf.settings.BotOwnerDiscordID) return message.channel.send(new client.embed().setDescription(`Excuse me, you are not my owner.`).setFooter(`${message.guild.name} | Made by the devs`, message.guild.iconURL({ dynamic: true })))

    try {
        eval(`(async () => {${args.join(' ')}})()`)
    } catch (e) { console.log(e) }
}