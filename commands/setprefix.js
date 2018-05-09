const db = require('quick.db')

exports.run = (Discord, client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("This requires you to have an `Administraton` role in this server. If you believe this is a problem, contact a server administrator or contact our Support Team!")
    if (!args.join(" ")) return message.channel.send("__**Incorrect Usage**__\n**Correct Usage:** `setprefix <prefix>`!")
    
    db.set(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => {

        message.channel.send("**Prefix Changed To: **" + i)
         let staffc = message.guild.channels.find("name", "logs")
        
        if (!staffc) return message.reply('I cannot find a #logs channel, please ask a server admin to make one in order to use moderation/admin commands!');
        const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setTimestamp()
            .setDescription(`**Action:** SetPrefix\n**User:** ${message.author.tag}\n**They changed it to:** ${i});
         staffc.send({embed});
    })

}
