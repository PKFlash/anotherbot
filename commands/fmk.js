module.exports = {
  name: 'fmk',
  description: 'why did I make this',
  args: true,
  execute(message, args) {
    let [first, second, third] = args;
  /*  var verdict1 = args[Math.floor(Math.random()*3)];
    var verdict2 = "g";
    var verdict3 = "h"; */
    message.channel.send(`first ${first}, second ${second}, third ${third}`);
  },
};
