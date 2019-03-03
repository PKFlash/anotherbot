module.exports = {
  name: 'cycopedia',
  description: 'the big one',
  execute(message, args) {
    const fs = require('fs');
    var {client} = require(".anotherbot/index.js");
    client.cycopedia = require(".anotherbot/cycopedia.json");

  if (args === "find") {
    message.channel.send("Input tags.");
  }

  if (args === "add") {
    if(message.member.roles.some(role => role.name === 'meme god')) {
      message.channel.send("Test successful.");
    }
    //Add, delete, and edit commands
    if(!message.member.roles.some(role => role.name === 'meme god')) {
      return message.reply("Nice try.");
    }
  }
    },
};
