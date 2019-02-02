module.exports = {
  name: 'lyrics',
  description: 'Thanks David',
  execute(message, args) {
      const b1 = "President laughs shaves his head\nPushes the button and bombs the Reds\nReds hits back with all they've got\nNow we're all in the melting pot";
      const b2 = "Love me two times, baby\nLove me twice today\nLove me two times, girl\n'Cause I got AIDS\nLove me two times, baby\nOnce for tomorrow\nOnce cause I got AIDS";
      const b3 = "Ah wow, how'd ya get a car?\nOh, my folks drove it up here from the Bahamas\nYou're kidding\nI must be, the Bahamas are islands--okay, the important thing here is that, uh, you ask me what kinda car it is";
      const b4 = "Mom and Dad don't like me\nThey say I'm mean and crude\nOh, they tried to make me a good little worm\nThey're sticking downers in my food";
      const b5 = "Beach party Vietnam\nSurfin' with the Viet Cong\nCookin' hot dogs with napalm\nA beach party Vietnam";
      const b6 = "Violence isn't the only option...till my fist hits your face!";
      var lyricArray = [b1, b2, b3, b4, b5, b6];
      var lyricSend = lyricArray[Math.floor(Math.random()*lyricArray.length)];
      message.channel.send(lyricSend).then().catch(console.error);
    },
};
