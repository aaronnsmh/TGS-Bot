exports.run = (Discord, client, message, args) => {

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need the ADMINISTRATOR permission to run this comamnd!")
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
		   message.channel.send("@everyone Announcement from: " + author);
		   message.channel.send({embed})
	   
}