exports.run = (Discord, client, message, args) => {

let allowedRole = message.guild.roles.find("name", "bot admin");	
let thumbnail = client.user.avatarURL;
let name = client.user.username;


 if(message.member.roles.has(allowedRole.id)) {
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("I can't announce nothing. Use the format: -announce [TITLE] [DESCRIPTION].");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail(thumbnail)
		   .setAuthor(name)
		   .setTitle(":mega: Announcement:")
		   .setDescription(text)
		   .setFooter(name + "| Announced at ")
		   .setTimestamp()
		   message.channel.send("Announcement from: " + author);
		   message.channel.send({embed})
	   }
else {
	message.channel.send("You need to have the 'bot admin' role to announce!")
	return;
}
}
