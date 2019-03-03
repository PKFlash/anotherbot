module.exports = {
  name: 'cycopedia',
  description: 'the big one',
  execute(message, args) {
    const fs = require('fs');
    var {client} = require("./../index.js");
    client.cycopedia = require("./../cycopedia.json");

    var data = fs.readFileSync('./../cycopedia.json');
    var words = JSON.parse(data);

  //Structure: !cycopedia [find, add, edit, remove]0, [year, tag, artist]1

  if (args[0] === "find") {
    if (args.length != 2) {
      message.channel.send("What you're looking for is *find* and then *year*, *tag*, or *artist*." );
    }
    else {
    let [first, second] = args;
    console.log(words);
    }
  }

  if (args[0] === "add") {
    if(message.member.roles.some(role => role.name === 'meme god')) {
      if (args.length != 5){
        message.channel.send("Input artist, album name, year, and tags (separate tags by spaces, not commas).");
      }
      else {
        //client.cycopedia[] = {
        //message:
        }
      }
    }
    //Add, delete, and edit commands
    if(!message.member.roles.some(role => role.name === 'meme god')) {
      return message.reply("Nice try.");
    }
  }
    },
};
