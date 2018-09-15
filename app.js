const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
var mark = "`";


fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});



client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    fs.readdir("./commands", function(err, items){
        if(items.includes(command + '.js'))
        {
            let commandFile = require(`./commands/${command}.js`);
            commandFile.run(client, message, args, config, fs);
        }
        else
        {
            message.channel.send("Commande inconnue, essayez "+config.prefix +"help ");
        }

    });
});

client.login(config.token);