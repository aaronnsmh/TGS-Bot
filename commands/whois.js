

const superagent = require("superagent");
exports.run = async (Discord, client, message, args) => {
	let baseurl = "https://verify.eryn.io/api/user/"
    	let reason1 = message.mentions.users.first();
	let reason = reason1.id;
	const url = baseurl + reason;
	let {body} = await superagent
	.get(url);
	let username = body.robloxUsername;
	let id = body.robloxId;
	if (id.length < 1) 
		return message.reply('You are not verified yet! Please verify with KCverify.');
	let avatarurl = "https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&userid=" + id;
	let groupurlbase = "https://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&groupid=937709&playerid=";
	let groupurl = groupurlbase + id;
          const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
	  	   .setDescription("**Roblox Name: **\n" + username + "\n**Roblox ID:**\n" + id + "\n**Profile Link:** \n" + "https://www.roblox.com/users/" + id)
		   .setFooter("Requested by " + message.author + " at ")
		   .setTimestamp()
	  	   .setThumbnail(avatarurl)
		   message.channel.sendEmbed(embed);
}
