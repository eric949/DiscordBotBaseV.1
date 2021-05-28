module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);
        console.log('a')
        msg.edit(`🏓 Pong!
        Latency is ${Math.floor(msg.createdAt - message.createdAt)}ms`);
    }
}