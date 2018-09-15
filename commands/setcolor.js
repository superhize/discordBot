exports.run = (client, message, args, config, fs) => {


    if(!(args[0] == "hize" || args[0] == "roumi" || args[0] == "anemic")) return message.channel.send("Invalid role");

    let hize = message.guild.roles.get("490342136802181120");
    let admin = message.guild.roles.get("414872530957107201");
    let roumi = message.guild.roles.get("490342293736390656");
    let anemic = message.guild.roles.get("490342337386643470");


    if(message.member.roles.has(admin.id))
    {
        let membersWithRole;
        switch(args[0])
        {
            case "hize":
                hize.setColor("#"+args[1]).then(updated => console.log(`Set color of role to ${hize.color}`))
                    .catch(console.error);
                message.guild.sync();
                membersWithRole = hize.members.first();
                break;
            case "roumi":
                roumi.setColor("#"+args[1]).then(updated => console.log(`Set color of role to ${roumi.color}`))
                    .catch(console.error);
                message.guild.sync();
                membersWithRole = roumi.members.first();
                break;
            case "anemic":
                anemic.setColor("#"+args[1]).then(updated => console.log(`Set color of role to ${anemic.color}`))
                    .catch(console.error);
                message.guild.sync();
                membersWithRole = anemic.members.first();
                break;
        }
    }





}