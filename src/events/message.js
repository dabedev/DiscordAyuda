module.exports = {
    name: "message",
    run(message, prefix, client) {
        if (message.member.bot) return;
        var args = message.content.slice(prefix.length).split(/ +/g);
        var command = args.shift().toLowerCase();
        try {
        const commandFile = require("../commands/" + command);
        commandFile.run(client, message, args);
        } catch (e) {
        if (e) return console.log(e)
        };
        }
}