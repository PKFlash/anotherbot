module.exports = {
  name: 'help',
  description: 'pls work',
  execute(message, args) {
    const Discord = require("discord.js");
    const embed = require('./embed.js');

    let hEmbed = require('./embed.js');
    message.channel.send({embed: hEmbed}).catch((e) => { console.log(e); });
  },
};
