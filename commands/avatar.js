var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {
if(message.mentions.users.first()) { //Check if the message has a mention in it.
          let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
          let output = "Avatar URL: " + user.avatarURL;
          let avatarurl = user.avatarURL;
          let thumbnail = client.user.avatarURL;
          let author = message.author;
    
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail(thumbnail)
		   .setTitle(":frame_photo: Avatar")
		   .setImage(avatarurl)
		   .setFooter("Requested by " + author + " at ")
		   .setTimestamp()
		   message.channel.sendEmbed(embed);
          
    } else {
          message.reply("Please tag a user!"); //Reply with a mention saying "Invalid user."
    }
}
