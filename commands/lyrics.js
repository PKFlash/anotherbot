module.exports = {
  name: 'lyrics',
  description: 'Thanks David',
  execute(message, args) {
      const b1 = "President laughs shaves his head\nPushes the button and bombs the Reds\nReds hit back with all they've got\nNow we're all in the melting pot";
      const b2 = "Love me two times, baby\nLove me twice today\nLove me two times, girl\n'Cause I got AIDS\nLove me two times, baby\nOnce for tomorrow\nOnce cause I got AIDS";
      const b3 = "Ah wow, how'd ya get a car?\nOh, my folks drove it up here from the Bahamas\nYou're kidding\nI must be, the Bahamas are islands--okay, the important thing here is that, uh, you ask me what kinda car it is";
      const b4 = "Mom and Dad don't like me\nThey say I'm mean and crude\nOh, they tried to make me a good little worm\nThey're sticking downers in my food";
      const b5 = "Beach party Vietnam\nSurfin' with the Viet Cong\nCookin' hot dogs with napalm\nA beach party Vietnam";
      const b6 = "Violence isn't the only option...till my fist hits your face!";
      const b7 = "Excuse me while I puke and die...";
      const b8 = "There's a time for taking\nAnd a time for giving\nBut ripping off the Butthole Surfers\nIs how we make our living";
      const b9 = "YOUR KID'S AN ASSHOLE\nYOUR KID'S AN ASSHOLE\nYOUR KID'S AN ASSHOLE\nYOUR KID'S AN ASSHOLE\nONE MORE TIME--\nYOUR KID'S AN ASSHOLE";
      const b10 = "Gotta coke up my nose to dry away the snot\nViva Las Vegas!";
      const b11 = "Is my cock big enough\nIs my brain small enough\nFor you to make me a star";
      const b12 = "In lonely gas stations with mini-marts\nYou'll find rows of them for sale\nLiquor-filled statues of Elvis Presley\nScrew his head off and drink like a vampire\nHis disciples flock to such a fitting shrine\nSprawled across from his ghastly mansion\nA shopping mall filled with prayer rugs and Elvis dolls\nAnd I wonder - yeah, I wonder\nWill Elvis take the place of Jesus in a thousand years?";
      const b13 = "We're sorry\nWe hate to interrupt\nBut it's against the law to jump off this bridge\nYou'll just have to kill yourself somewhere else\nA tourist might see you\nAnd we wouldn't want that";
      const b14 = "Reaganomics killing me\nReaganomics killing me\nReaganomics killing me\nReaganomics killing you";
      const b15 = "I stayed at home today\nAnd I'm not going back to work\nMoney stinks, money stinks\nThis city stinks";
      const b16 = "There are no war crimes\nWar is the crime";
      const b17 = "And there's an anarchy sign on the bus stop wall\nBut it's very hard to relate\nThe bus work to keep in line\nSo who's gonna smash the state?";
      const b18 = "You blame the system for the weather but carry on as ever\nYou go to work at half past eight and come back home at five\nBut you're still in this society\nSo what's your main priority\nRemain in the majority who never really cared?\nOr cultivate the hate to annihilate the state\nAre you prepared to die for your beliefs or just to dye your hair?";
      const b19 = "Eat shit! And live";
      const b20 = "I don't even want to kno\nHow in the hell you got screen time on this show";
      var lyricArray = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20];
      var lyricSend = lyricArray[Math.floor(Math.random()*lyricArray.length)];
      message.channel.send(lyricSend).then().catch(console.error);
    },
};
