module.exports = {
  name: 'args-info',
  description: 'test.',
  args: true,
  execute(message, args) {
    message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
  },
};
