exports.run = (client, message, args, config, fs) => {
    async function purge()
    {
        var m = await message.channel.messages.fetch({after: args[0], limit: 99 });
        message.channel.bulkDelete(m).catch(error.console);
    }

    purge();
}