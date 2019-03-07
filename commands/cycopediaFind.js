module.exports = {
  name: 'cycopediaFind',
  description: 'the big one',
  execute(message, args) {
    const fs = require('fs');
    var {client} = require("./../index.js");
    client.cycopedia = require("./../cycopedia.json");

    let rawdata = fs.readFileSync('cycopedia.json');
    let entry = JSON.parse(rawdata);

    console.log(entry);

  //Structure: !cycopedia [find, add, edit, remove]0, [year, tag, artist]1

  /*if (args[0] === "find") {
    if (args.length != 2) {
      message.channel.send("What you're looking for is *find* and then *year*, *tag*, or *artist*." );
    }
    else {
      let [first, second] = args;
      //let info = client.cycopedia.msc;
      message.channel.send("Found.");
    }
  }*/

    },
};
