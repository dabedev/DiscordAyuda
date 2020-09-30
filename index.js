const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.PREFIX;
client.on('message', async message => {
var args = message.content.slice(prefix.length).split(/ +/g);
var command = args.shift().toLowerCase();
if (command == "say") {
if (!args[0]) return message.channel.send("Ingresa algún mensaje a ser enviado. `!say <mensaje>`")
message.channel.send(args.join(" "));
};
});
client.login(config.TOKEN);