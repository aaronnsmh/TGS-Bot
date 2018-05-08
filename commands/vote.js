const Discord = require('discord.js')

exports.run = async (Discord, client, message, args) => {
  if (!args) return message.reply("You must have something to vote for!")
  if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
    
  var admin= new Discord.RichEmbed()
        .setTitle("Vote: " + args.slice(0).join(" "))
        .setDescription("React below with ✅ or ⛔!")
        .setFooter("Vote requested by: " + message.author.id + " at: ")
        .setTimestamp()
    const pollTopic = await message.channel.sendEmbed(admin);
    pollTopic.react(`⛔`);
    pollTopic.react(`✅`);
};
