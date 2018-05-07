var flip = require("flip-text");


exports.run = (Discord, client, message, args) => {
	if(args) return message.channel.send(flip(args));
	else return false;
};
