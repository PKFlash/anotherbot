module.exports = {
  name: 'cycopediaAdd',
  description: 'the big one',
  execute(message, args) {
    const fs = require('fs');
    var {client} = require("./../index.js");
    client.cycopedia = require("./../cycopedia.json");

    var data = fs.readFileSync('cycopedia.json');
    var words = JSON.parse(data);
    var msc = [];

  //Structure: !cycopedia [find, add, edit, remove]0, [year, tag, artist]1

  function Entry(name, album, year, tags) {
    this.name = name;
    this.album = album;
    this.year = year;
    this.tags = tags;
  }


    if(message.member.roles.some(role => role.name === 'meme god')) {
      if (args.length != 4){
        message.channel.send("Input artist, album name, year, and tags (separate tags by spaces, not commas).");
      }
      else {
        message.channel.send("cool");
        /*let [name1, album1, year1, tags1] = args;
        var entry1 = new Entry(name1, album1, year1, tags1);

        for(var i in msc){
          var item = msc[i];
          msc.push({
            "name" : item.name,
            "album" : item.album,
            "year" : item.year,
            "tags" : item.tags
          });
        }

        client.cycopedia[message.author.username] = {
          message: message.content
        }

        fs.writeFile("cycopedia.json", JSON.stringify(msc, null, 4), err => {
          if (err) throw err;
          else {
            message.channel.send("got it");
          }
        }
        );
      }*/
    }
    if(!message.member.roles.some(role => role.name === 'meme god')) {
      return message.reply("Nice try.");
    }

    },
};
