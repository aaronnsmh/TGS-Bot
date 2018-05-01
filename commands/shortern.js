   var TinyURL = require('tinyurl');
   
   exports.run = (Discord, client, message, args) => { 
    
    var mes = message.content.split(" ").slice(1).join(" ");
    var mes = encodeURI(message.content.split(" ").slice(1).join(" "))
    TinyURL.shorten(mes, function(res) {
    bot.sendMessage(message, res)
}
