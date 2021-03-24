const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./src/assets/configFiles/config.json');
const prefix = config.PREFIX;
client.on('message', async message => {
if (message.member.bot) return;
var args = message.content.slice(prefix.length).split(/ +/g);
var command = args.shift().toLowerCase();
try {
const commandFile = require("./src/commands/" + command);
commandFile.run(client, message, args);
} catch (e) {
if (e) return console.log(e)
};
});
client.login(config.TOKEN);