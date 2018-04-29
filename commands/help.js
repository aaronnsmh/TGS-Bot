var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {
    
let thumbnail = client.user.avatarURL;
let name = client.user.username;
    
    message.reply("Here is the help you are looking for:");
    var embedcmds= new Discord.RichEmbed()
        .setFooter("©Made by Aaron")
        .setColor(randomColor)
        .setTitle("Bot Help")
        .setDescription("The prefix for this server is '-'. Run -cmds for info on how to use each command!")
        .setThumbnail(thumbnail)
        .setAuthor(name,thumbnail)
    message.channel.sendEmbed(embedcmds);
    message.delete(10000)

}
