module.exports = {
  name: 'fuckCount',
  description: 'what dirty words',
  execute(message, args) {
    message.channel.send(`You all have fucked ${fck} times.`);
  },
};
