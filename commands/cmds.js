var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {
let name = client.user.username;
let thumbnail = client.user.avatarURL;
    message.reply("Commands:");
    var embedcmds= new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setAuthor(name,thumbnail)
        .setColor(randomColor)
        .setTitle(":book:   " + name + " Commands")
      .setDescription("Wondering what I do? Well you sir/ma'am have a very good question! Read on to see why I am here! The prefix here is 'KC' (thanks to SuperRussia for the idea)")
        .addField(":8ball: 8Ball [QUESTION]", "Responds with what will happen.")
        .addField(":gay_pride_flag:  randomcolor", "Responds with a random hex color.")
        .addField(":o: cointoss", "Tosses a coin.")
        .addField(":frame_photo: avatar [@USER]", "Shows a picture of a tagged persons avatar!")
        .addField(":koala:  koala/cat", "Posts a random picture of the animal. (Thanks to Robloxian_Thinking)")
        .addField(":books:  dogfact/catfact", "Returns a random fact about your chosen animal.")
        .addField(":grey_question: whois [@USER]", "If the user is verified, it will respond with their roblox name and ID.")
        .addField(":gift:  gif [SEARCH]", "Searches the interweb for your gif.")
        .addField(":link: shorten [LINK] [title]", "Shortens the specified URL with the optional title!")
        .addField(":white_sun_cloud: weather [CITY]", "Shows the weather for your specified city.")
        .addField(":clock1: More CMDS coming soon", "What do you expect me to put here?")
    var admin= new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Mod Commands")
        .setColor(randomColor)
        .addField(":fire: kick/ban [@USER] [REASON]", "The bot kicks/bans the user with the reason you put. Tut tut!")
        .addField(":warning: Warn [@USER] [REASON]", "Warns the specified user and logs it.")
        .addField(":warning: Warnings [@USER]", "Tells you what to search for in #logs to check someones warnings.")
    var admin2= new Discord.RichEmbed()
        .setFooter("© " + name + "  | Made by Aaron#1742")
        .setTitle("Admin Commands")
        .setColor(randomColor)
        .addField(":loudspeaker: say [STRING]", "The bot says what you ask it to say, well duh.")
        .addField(":exclamation: announce [TITLE] [DESCRIPTION]", "Announces whatever you put in the channel you write it in.")
        .addField(":exclamation: eannounce [TITLE] [DESCRIPTION]", "Announces whatever you put in the channel you write it in, also tags everyone.")
    message.channel.sendEmbed(embedcmds);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return
    message.channel.sendEmbed(admin);
    if (!message.member.hasPermission("ADMINISTRATOR")) return
    message.channel.sendEmbed(admin2);
    message.delete(10000)

}
