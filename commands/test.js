
exports.run = (Discord, client, message, args) => {

let sender = message.author;
let allowedRole = message.guild.roles.find("name", "Board Of Executives");

       if(message.member.roles.has(allowedRole.id)) {
        message.author.send("What plan would you like? Options are: `Gold` and `Silver`");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content === "Gold") {
                message.channel.send("Your booking for `gold` session. What time and date would you like it at?");
            } else if (message.content === "Silver") {
                message.channel.send("Your booking for `silver` session. What time and date would you like it at?");
            }
        })
       } else {
         message.channel.send(":gear: Our furious workers (~~TheReal~~) are working hard to make something, don't try again please!")
         message.delete()
         .then(m=>m.delete(10000))
}}
}
