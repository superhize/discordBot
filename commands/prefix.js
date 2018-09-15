exports.run = (client, message, args, config, fs) => {
    var mark = "`";
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    if(!newPrefix=="" && newPrefix.length <3)
    {
        config.prefix = newPrefix;
        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
        return  message.channel.send("Nouveau préfix défini sur "+mark+newPrefix+mark);
    }
    else
    {
        return  message.channel.send("Préfix actuel: "+mark+""+config.prefix+""+mark)
    }

};