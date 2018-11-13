module.exports = {
  name: 'fmk',
  description: 'why did I make this',
  args: true,
  execute(message, args) {
    let [first, second, third] = args;
    message.reply(`first ${first}, second ${second}, third ${third}`);
  },
};
