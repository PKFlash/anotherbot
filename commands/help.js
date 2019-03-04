module.exports = {
  name: 'help',
  description: 'pls work',
  execute(message, args) {
    const Discord = require("discord.js");
    var {client} = require("./../index.js");
    message.channel.send({embed});
  },
};
