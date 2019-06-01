module.exports = {
  name: 'time',
  description: 'test function',
  execute(message, args) {
    var date = new Date();
    var current_hour = date.getHours();
    var d = current_hour.toString();
    message.channel.send(d);
  }
  },
};
