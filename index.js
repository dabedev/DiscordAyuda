const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./src/assets/configFiles/config.json');
const prefix = config.PREFIX;
const fs = require("fs");
const eventsDir = fs.readdirSync("./src/events/").filter(f => f.endsWith("js"));
for(key of eventsDir) {
    const eventFile = require("./src/events/" + key);
    client.on(eventFile.name, (...args) => eventFile.run(...args, prefix, client));
};

client.login(config.TOKEN);