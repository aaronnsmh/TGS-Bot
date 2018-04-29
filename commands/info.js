var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.reply("check your DMs!");
    var embedinfo = new Discord.RichEmbed()
        .setFooter("© Go-Karting Xtreme | Made by TheReal (Catty)")
        .setColor(randomColor)
        .setTitle("📖 Go-Karting Xtreme Information")
        .setDescription("For other inquiries that this information doesn't cover, use `-new [Issue]` in `#create-ticket`!")
        .addField(":iphone: What is Go-Karting Xtreme?", "Go-Karting Xtreme is the biggest community run Go-Karting game on ROBLOX. We aim to provide the best Go-Karting racing experience compared to all other existing Go-Karting games.")
        .addField(":exclamation: How do I verify to see all channels?", "Say '!verify' in #verify, or check #read-me for further assistance. To update your roles say '!getroles'")
        .addField(":pencil2: Sounds Great! How do I work here?", "At Go-Karting Xtreme, our setup allows for you to work in up to 5 departments! To work here, join our discord and go to `#Careers`, all infomation is posted there aswell as the applications thereself!")
        .addField(":telephone_receiver: Awesome, but when do we operate?", "We operate in the times that support `BST`/`GMT`. For a list of our opening hours, go to `#opening-hours`!")
        .addField(":moneybag: All set but I have a problem, what do I do?", "This document can't always help you, thats why we have a support team ready to help you! Go to `#create-ticket` and say `-new [Issue]`! Our team will be happy to work with you.")
        .addField(":pushpin: Official Server", "https://discord.gg/GR9qVVd")
        .addField(":closed_book: Our Group", "https://www.roblox.com/My/Groups.aspx?gid=2633056")
    message.author.sendEmbed(embedinfo);
    //.then(m=>m.delete(10000))

}
