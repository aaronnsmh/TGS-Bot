// ibot
// Version: 0.9 PRE-ALPHA / PRE-REALEASE
// Discord Code: 

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = '-';

   
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setActivity('nothing | -help', { type: 'WATCHING' });
    client.user.setStatus("online");
});


client.on('message', message => {

    let sender = message.author;

    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**Unfortunately we can only read things in guilds (servers). The comamnd prefix is '-' **")
        return;
}
    

   
   
   if (message.mentions.members.firstKey() === '383658506060038144') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry: My prefix is -')
   }
   


        let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (!message.content.startsWith(prefix)) return;

        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ${message.author.id} ran the command: ${cmd} probably unsuccsesfully!`);

        }
    })


client.login(process.env.BOT_TOKEN);
