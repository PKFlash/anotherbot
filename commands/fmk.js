module.exports = {
  name: 'fmk',
  description: 'why did I make this',
  args: true,
  execute(message, args) {
    if (args.length != 3) {
      message.channel.send("You know how fuck/marry/kill works, don't you?");
    }
    else {
    let [first, second, third] = args;
    var m = args.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = args[m];
      args[m] = args[i];
      args[i] = t;
    }
    message.channel.send(`Fuck ${args[0]}, marry ${args[1]}, kill ${args[2]}`);}
  },
};
