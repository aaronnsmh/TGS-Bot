exports.run = (Discord, client, message, args) => {

let allowedRole = message.guild.roles.find("name", "bot admin");	

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("wot u doin? this command is for kewl ppl only (If you think this is wrong, make sure you have the administrator discord permission)")
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail("https://t6.rbxcdn.com/fad4c603a443958512e8adb3660ff221")
		   .setTitle(":mega: Announcement:")
		   .setDescription(text)
		   .setFooter("An announcment from " + author + " made at ")
		   .setTimestamp()
		   message.channel.send("Announcement from: " + author);
		   message.channel.send({embed})
	   
}
