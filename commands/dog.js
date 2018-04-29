const superagent = require("superagent");
exports.run = (Discord, client, message, args) => {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);
  
  let dogembed = new Discord.RickEmbed()
  .setColor("#ff9900")
  .setTitle("Doggo")
  .setImage(body.url);
  message.channel.send(dogembed)
}
