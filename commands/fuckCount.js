module.exports = {
  name: 'fuckCount',
  description: 'what dirty words',
  execute(message, args) {
    message.channel.send(`This one is a work in progress. The problem is most likely the inclusion of a variable from the main file, but that's something I haven't been able to work out yet.`);
  },
};
