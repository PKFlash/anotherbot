module.exports = {
  name: 'radio',
  description: 'tune in!',
  execute(message, args) {
    message.channel.send("Tune in at 6! Click 'Listen Live' and go for the Pulse of Music stream \nhttps://witr.rit.edu/");
  },
};
