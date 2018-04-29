exports.run = (Discord, client, message, args) => {

	
if (message.member.hasPermission("ADMINISTRATOR")) {
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#FF0000")
		   .setThumbnail("https://cdn.discordapp.com/attachments/440213746820841472/440229522890293268/TGSSparklesBEZEL.png")
		   .setTitle(":mega: Announcement:")
		   .setDescription(text)
		   .setFooter("An announcment from " + author + " made at ")
		   .setTimestamp()
		   message.channel.send("Announcement from: " + author);
		   message.channel.send({embed})
}
