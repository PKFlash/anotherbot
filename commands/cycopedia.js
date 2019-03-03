module.exports = {
  name: 'cycopedia',
  description: 'the big one',
  execute(message, args) {
    const fs = require('fs');
    var {client} = require("./../index.js");
    client.cycopedia = require("./../cycopedia.json");

  if (args.length != 2) {
    message.channel.send("What you're looking for is *find* and then *year*, *tag*, or *artist*." );
  }
  else {
  let [first, second] = args;

  if (args[0] === "find") {
    message.channel.send("Input tags.");
  }

  if (args[0] === "add") {
    if(message.member.roles.some(role => role.name === 'meme god')) {
      message.channel.send("Test successful.");
    }
    //Add, delete, and edit commands
    if(!message.member.roles.some(role => role.name === 'meme god')) {
      return message.reply("Nice try.");
    }
  }
  }
    },
};
