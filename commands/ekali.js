module.exports = {
  name: 'ekali',
  description: 'Thanks David',
  execute(message, args) {
  message.channel.send("Basically it goes a little like this...I bounce out a song as a WAV, and then convert it to a 320 MP3 using iTunes. iTunes compresses very well (imo), and so if you compare that WAV with that 320, they will sound practically identical. I then take that 320 and Convert it to 128 in iTunes. The sound is STILL practically identical. (Because it is a good 128.) There may be a little rolloff around 8-10k (super high end) but it's more of a sound change than a degradation.");
  message.channel.send("This conception that 128's are drastically inferior to 320's mostly comes from 1. people reading bullshit on the internet, & 2. people downloading BAD 128's!!!! Seriously. Not every WAV is equal, not every 320 is equal. I could take something at 92 KBPS and rebounce it as a WAV. does that make it a lossless audio file? Fuck no. Who knows how many times it' been downconverted/upconverted etc. Just because you downloaded a rip on /xtrill and its a 128 and it sounds bad doesn't mean 128's sound bad. Just because the apple I bought was rotten doesn't mean all apples taste awful.");
  message.channel.send("Basically if I listen to a song and it sounds good, I will play it. People knock me for playing 128's and I'm just like... If I can't tell the difference, then neither can you. And the bit about playing it on big systems and it sounding like shit is also a load of crap. TL;DR: If it sounds good on good headphones, play it. (That said, anything below 128 and you will notice audio quality deteriorate VERY quickly.)");
  },
};
