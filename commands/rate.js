module.exports = {
  name: 'rate',
  description: 'scale 1-10',
  execute(message, args) {
    min = Math.ceil(0);
    max = Math.floor(11);
    var rating = Math.floor(Math.random()*(max - min) + min);
    var strp = args.join();

    if (!strp.replace(/\s/g, '').length) {
      message.channel.send("I ain't rating _nothing._");
    }
    else if (strp.startsWith("yourself") || strp.startsWith("richie")) {
      message.channel.send("I rate myself a 69/10.");
    }

      else if (strp.startsWith("my")) {
        var str3 = strp.substr(3);
        const yr = "your ";
        var str4 = yr.concat(str3);

        if (rating === 8) {
          message.channel.send(`I rate ${str4} an 8 out of 10.`);
        }
        else {
          message.channel.send(`I rate ${str4} a ${rating} out of 10.`);
        }
      }
      else if (strp.startsWith("your")) {
        var str5 = strp.substr(5);
        const yr = "my ";
        var str6 = yr.concat(str5);

        if (rating === 8) {
          message.channel.send(`I rate ${str6} an 8 out of 10.`);
        }
        else {
          message.channel.send(`I rate ${str6} a ${rating} out of 10.`);
        }
      }

    else if (rating === 8) {
      message.channel.send(`I rate ${args} an 8 out of 10.`);
    }
    else {
      message.channel.send(`I rate ${args} a ${rating} out of 10.`);
    }
  },
};
