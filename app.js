// TGS-Bot
// Version: 0.9 PRE-ALPHA / PRE-REALEASE
// Discord Code: 

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = '!!';
const { get } = require("snekfetch"); 
const superagent = require("superagent");
const weather = require('weather-js');

var randomColor = Math.floor(Math.random() * 16777215).toString(16);
   
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setActivity(' TG Systems | !!help', { type: 'WATCHING' });
    client.user.setStatus("online");
});

bot.on('message', message => {
  if (message.content.startsWith("im")) {
        let name1 = args[1];
        message.channel.send('Hello, ' + name1 + ' I am TGS Bot!')
  }
});   


client.on('message', message => {

    let sender = message.author;

    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**Unfortunately we can only read things in guilds (servers). The comamnd prefix is '!!' **")
        return;
}
    

   
   
   if (message.mentions.members.firstKey() === '440230198474965002') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. How rude! :angry: My prefix is !!')
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
