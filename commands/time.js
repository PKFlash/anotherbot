module.exports = {
  name: 'time',
  description: 'test function',
  execute(message, args) {
    var t = require("./../index.js");
    var d = current_hour.toString();
    message.channel.send(d);
  }
  },
};
