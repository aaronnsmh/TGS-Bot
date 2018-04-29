var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.channel.send("Private Booking Details:");
    var embedinfo = new Discord.RichEmbed()
  .setTitle("Go-Karting Xtreme")
  .setColor("#15f153")
  .setDescription("Private Booking Information & ToS")
  .addField("Payment", "Payment will be paid after our team have decided that the session will be able to go ahead. Once paid, no refunds will be given. We DM you on discord to discuss the final stages of private hire sessions.")
  .addField("Plans", "We have three stages for private hire sessions, `bronze`, `silver` and `gold`.")
    message.channel.sendEmbed(embedinfo);
    //.then(m=>m.delete(10000))
    var embedgold = new Discord.RichEmbed()
  .setTitle("Gold") //Wait a sec I've got an idea, we should have it so different pages has different plans, let me find dat code.
    .setColor("#FFD700")
    .setDescription("Gold Plan Details:")
    .addField("Session Time", "90 minutes (3 Mini Sessions)")
    .addField("Racer Amount", "40 racers maximum")
    .addField("Staff", "8 staff members")
    .addField("Race Types", "Free time, races, bumper karts, wrong-way-racing and showdown avalible")
    .addField("Price", "R$449")
    message.channel.sendEmbed(embedgold);
    var embedsilver = new Discord.RichEmbed()
  .setTitle("Silver") //Wait a sec I've got an idea, we should have it so different pages has different plans, let me find dat code.
    .setColor("#C0C0C0")
    .setDescription("Silver Plan Details:")
    .addField("Session Time", "60 minutes (2 Mini Sessions)")
    .addField("Racer Amount", "25 racers maximum")
    .addField("Staff", "6 staff members")
    .addField("Race Types", "Free time, races and showdown avalible")
    .addField("Price", "R$349")
    message.channel.sendEmbed(embedsilver);
    var embedbronze= new Discord.RichEmbed()
  .setTitle("Bronze") //Wait a sec I've got an idea, we should have it so different pages has different plans, let me find dat code.
    .setColor("#CD7F32")
    .setDescription("Bronze Plan Details:")
    .addField("Session Time", "30 minutes (1 Mini Session)")
    .addField("Racer Amount", "15 racers maximum")
    .addField("Staff", "4 staff members")
    .addField("Race Types", "Free time, races avalible")
    .addField("Price", "R$169")
    message.channel.sendEmbed(embedbronze);

}
