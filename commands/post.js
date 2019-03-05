module.exports = {
  name: 'post',
  description: 'oooops',
  args: true,
  execute(message, args) {
    if (args.length != 1) {
      message.channel.send("Pick one thing and stick with it.");}

    else if (args[0] === "align") {message.channel.send("https://cdn.discordapp.com/attachments/500773668440375297/531546305886158883/unknown.png");}
    else if (args[0] === "drum") {message.channel.send("https://www.youtube.com/watch?v=mJ9Gj2V-VzY");}
    else if (args[0] === "ekali") {  message.channel.send("Basically it goes a little like this...I bounce out a song as a WAV, and then convert it to a 320 MP3 using iTunes. iTunes compresses very well (imo), and so if you compare that WAV with that 320, they will sound practically identical. I then take that 320 and Convert it to 128 in iTunes. The sound is STILL practically identical. (Because it is a good 128.) There may be a little rolloff around 8-10k (super high end) but it's more of a sound change than a degradation.");
      message.channel.send("This conception that 128's are drastically inferior to 320's mostly comes from 1. people reading bullshit on the internet, & 2. people downloading BAD 128's!!!! Seriously. Not every WAV is equal, not every 320 is equal. I could take something at 92 KBPS and rebounce it as a WAV. does that make it a lossless audio file? Fuck no. Who knows how many times it' been downconverted/upconverted etc. Just because you downloaded a rip on /xtrill and its a 128 and it sounds bad doesn't mean 128's sound bad. Just because the apple I bought was rotten doesn't mean all apples taste awful.");
      message.channel.send("Basically if I listen to a song and it sounds good, I will play it. People knock me for playing 128's and I'm just like... If I can't tell the difference, then neither can you. And the bit about playing it on big systems and it sounding like shit is also a load of crap. TL;DR: If it sounds good on good headphones, play it. (That said, anything below 128 and you will notice audio quality deteriorate VERY quickly.)");}
    else if (args[0] === "owned") {message.channel.send("https://www.youtube.com/watch?v=Q_7NSXnlQ64&t=463s");}
    else if (args[0] === "queen") {const v1 = "https://www.youtube.com/watch?v=YT0PYyUYi0Y";
        const v2 = "https://youtu.be/rc2AuAXl5lI";
        const v3 = "https://youtu.be/aCy3pLn1W-U";
        const v4 = "https://youtu.be/nwN6dPNXklg";
        const v5 = "https://youtu.be/nwN6dPNXklg";
        const v6 = "https://youtu.be/jO9C7frk2ss";
        const v7 = "https://youtu.be/ktYlzVYQbwY";
        var vids = [v1, v2, v3, v4, v5, v6, v7];
        var post = vids[Math.floor(Math.random()*vids.length)];
        message.channel.send(post);}
    else if (args[0] === "snl") {message.channel.send("https://www.youtube.com/watch?v=Frud5RFtTi0");}
    else {message.channel.send("Pick from the list or something.");}
  },
};
