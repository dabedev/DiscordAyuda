exports.run = function(client, message, args) {
if (!args[0]) return message.channel.send("Ingresa algún mensaje a ser enviado. `!say <mensaje>`")
message.channel.send(args.join(" "));
};