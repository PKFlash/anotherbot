module.exports = {
  name: 'radio',
  description: 'tune in!',
  execute(message, args) {
    message.channel.send("Tune in at 10! Click 'Listen Live' and go for the Pulse of Music stream. \nhttps://witr.rit.edu/\nThis is *Unsafe at Any Speed,* two hours of straight punk rock followed by a couple of random genres and a Queen song");
  },
};
