const Discord = require('discord.js')

exports.run = async (Discord, client, message, args) => {
  if (!args) return message.reply("You must have something to vote for!")
  if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
    message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `);
    const pollTopic = await message.channel.send({
		embed: {
			author: { name: `${message.author.id}'` },
			fields: [{
				name: "Vote on:",
				value: args,
				inline: true
			}
			thumbnail: { url: `${message.guild.iconURL ? message.guild.iconURL : ""}` },
			color: 0xFFFFFF
		}
});
    pollTopic.react(`✅`);
    pollTopic.react(`⛔`);
};
