const Discord = require('discord.js')

exports.run = async (Discord, client, message, args) => {
  if (!args) return message.reply("You must have something to vote for!")
  if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
    message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `);
  var admin= new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Vote: " + args)
        .setDescription("React below with ✅ or ⛔!")
        .setFooter("Vote requested by: " + message.author.id + " at: ")
        .setTimestamp()
    message.channel.sendEmbed(admin);
    const pollTopic = await message.channel.send(args);
    pollTopic.react(`⛔`);
    pollTopic.react(`✅`);
};
