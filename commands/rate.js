module.exports = {
  name: 'rate',
  description: 'scale 1-10',
  execute(message, args) {
    min = Math.ceil(0);
    max = Math.floor(11);
    var rating = Math.floor(Math.random()*(max - min) + min);
    if (args[0] === "") {
      message.channel.send("Hey, I got better things to do than rate an empty string.");
    }
    else if (args[0] === "yourself" || args[0] === "richie") {
      message.channel.send("I rate myself a 69/10.");
    }
    else if (rating === 8) {
      message.channel.send(`I rate ${args} an 8 out of 10.`);
    }
    else {
      message.channel.send(`I rate ${args} a ${rating} out of 10.`);
    }
  },
};
