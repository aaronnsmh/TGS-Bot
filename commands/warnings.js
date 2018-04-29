exports.run = (Discord, client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) 
        return message.reply('You must mention someone to check their warnings.').catch(console.error);
    message.channel.send(`Please search the following in #logs by clicking in the search box:`);
    const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setDescription('in: logs Warning ' + user.tag);
    message.channel.send({embed});
}
