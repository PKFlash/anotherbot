module.exports = {
  name: 'fmk',
  description: 'why did I make this',
  args: true,
  execute(message, args) {
    if (!args.length === 3) {
      return message.channel.send("Hey, you should know how this works by now.");
    }

    else {
      return message.channel.send("test1");
    }
  },
};
