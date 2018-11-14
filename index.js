const fs = require('fs');
const Discord = require("discord.js");
const token = process.env.token;
const prefix = process.env.prefix;

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log("I am ready!");
});

//the embed
const embed = new Discord.RichEmbed()
  .setTitle("**IS THIS WHAT YOU WANT?!**")
  .setAuthor("fuckfuckfuckfuckfuckfuck", "https://cdn.discordapp.com/attachments/500773668440375297/500817119865208863/fuck.JPG")
  .setColor("#00f9ff")
  .setDescription("All these landmines, so little time")
  .setFooter("Next time he comes here, we're gonna GET his ass")
  .setImage("https://cdn.discordapp.com/attachments/500773668440375297/500817119865208863/fuck.JPG")
  .addField("Landmines",
    "one minute \nknee \nnose \nnightlife \ndrink \nrichie dagger \ndagger.help")
  .addField("Additional info", "Taking a ride to my old haunt \nshe's in my blood, she resides in my nightlife \nmy favorite color's candy apple girl");


//setup
client.on("message", (message) => {

  const msg = message.content.toLowerCase();

  if (message.author.bot) return;

//trigger words
  if (msg.includes("knee")) {
    message.channel.send("my knee, my FUCKING knee");
  } else

  if (msg.includes("one minute")) {
    message.channel.send("Give me a fucking break, one minute left. One minute fucking left. You're gonna give me fucking one minute? Look at that fucking sign right there, one minute! Let me fucking tell you something, let me tell you something, I've been around since fucking nineteen eighty fucking eight, and you're gonna give me one fucking minute?! You've gotta be fucking kidding me! You're fucking kidding me! What the fuck!? I'm not fucking Justin Bieber, you motherfuckers! You gotta be fucking joking, this is a fucking joke. I got one minute, one minute left. Oh now I got nothing left, now I got nothing left. Let me show you what one fucking minute fucking means!");
   }

   if (msg.includes("nose")) {
     message.channel.send("--thrashed on my nose, look at my nose! Look at it! All right, I didn't do nothin' to their shit, they fuckin' grabbed me like--just so they're gonna hit me. It wasn't no accident! I'm just saying--we know who he is! When he comes back here, we're gonna *get* his ass!");
   }

   if (msg.includes("nightlife")) {
     message.channel.send("You mean, the best song *ever?*");
   }

   if (msg.includes("drink")) {
     message.channel.send("Drink, yeah? Could you get me one?");
   }

   if (msg.includes("kill me") || msg.includes("end my life") || msg.includes("aaa") || msg.includes("I wanna die") || msg.includes("I want to die") || msg.includes("kms") || msg.includes("commit die")) {
     message.channel.send("Same.");
   }

   if (msg.includes("dagger.help")) {
     message.channel.send({embed});
   }

   if (msg.includes("richie dagger")) {
     const jello1 = "Ray's guitar broke. No, we won't play Rawhide, won't play anything. We'll play the theme from the Dinah Shore show. Who wants to be Dinah Shore? Whose alter-ego is Dinah Shore? Oh, his fists didn't go up so quickly this time. Yawn...yawn..yawn. Put those headphones on, it's be-bop time.";
     const jello2 = "I want to tell you a story about the last time I was in Portland. The night before we played at the Long Goodbye. I was walking on the street about 10:30 at night. A lot of people go to bed around here at 10:30 at night. And well, I was walking along when suddenly these jocks in this bright blue pickup drove up. It had KC lights, tractor tires, everything but the CB.";
     const jello3 = "It was a life-size Hot Wheels car for some dumb rich kid, right. Well, they drove up to me and they yelled what dumb rich kids usually yell--*Hey, faggot,* and showered me with some water. So, I stood there thinking, *what a bunch of fuckheads* and picked up a rock. Now, I waited, walked down about a block to where the Kentucky Fried Chicken is, on Burnside, and sure enough they drove around again.";
     const jello4 = "They said, *Hey, faggot, where's the nearest McDonald's?* I said, *I don't know* and they squirted me again. So I threw the rock! and put a nice-size dent in their giant Hot Wheels car. They screeched to a halt in the parking lot of some department store, whose name I don't remember, it's up the street from Fred Meyer, and they got out their clubs and they ran after me, yelling, *We're gonna kill you, you goddamn faggot, we're gonna kill you, you motherfucker!*";
     const jello5 = "So I got in a phonebooth by the Kentucky Fried Chicken on Burnside, held my legs straight out like this so they couldn't open the door to the phonebooth. So they began charging the phonebooth, beating on it with their club, yelling, *We're gonna kill you, you motherfucker, we're gonna kill you, you god damn faggot.* I just looked at them.";
     const jello6 = "So, there was a crowd gathering by this time and these kids were standing nearby and they said, *Oh, look at him, he's insane.* I thought, *ah-hah, here's my way out!* I yelled at them, *Take me to a mental hospital right away! I wanna be be put away! Please put me away, c'mon, call the cops and put me away! Please put me away now!*";
     const jello7 = "They said, *All right, faggot, we're calling the police.* So they called the police. The cop comes out and I go, *ah, my savior, I'm away from these jocks.* He opens up the door, *Get out of there, you,* throws me up against the car, frisks me, shoves me in the back. Then he goes over to the jocks, *Now what happened here? It looks like we're going have to take him to jail but we got to have the full story first.*";
     const jello8 = "So the jocks, who had an ace in the hole, ace in the hole--! Take down on the bass, a little bit down on the bass. Yeah, ace in the hole, and they go, *Well, goddammit, the motherfucker put a dent in my truck, a $5000 truck, right, so I got my club, I went out and I wanted to kill him. I want to kill him! Let me kill him, goddammit! Let me kill him!*";
     const jello9 = "So the cop made them go home, and he drove me home, and he confiscated their club and my rock as further evidence. And I thought, *so this is Oregon, huh? Tolerant Oregon.* Ray, are you done with your guitar yet? He isn't done yet. So what else do you want to hear, I'm out of stories. That's a true story, too. Just ask Bruce Loose.";
     var options = ["<:germ:501098082629451788>", "<:fuck:493591715156983808>", "<:baku:454446735461187595>", "<:kiri:480426336679231528>","<:gotem:494306244069163058>", "<:onion:500760803360636929>", "<:lemo:500760832230031370>", jello1];
     var response = options[Math.floor(Math.random()*options.length)];
     message.channel.send(response).then().catch(console.error);
     if (response == jello1) {
       message.channel.send(jello2).then().catch(console.error);
       message.channel.send(jello3).then().catch(console.error);
       message.channel.send(jello4).then().catch(console.error);
       message.channel.send(jello5).then().catch(console.error);
       message.channel.send(jello6).then().catch(console.error);
       message.channel.send(jello7).then().catch(console.error);
       message.channel.send(jello8).then().catch(console.error);
       message.channel.send(jello9).then().catch(console.error);
     }
   }

   if (msg.includes("richie can") || msg.includes("richie will") || msg.includes("richie is") || msg.includes("richie was") || msg.includes("richie does") || msg.includes("richie are") || msg.includes("richie did")) {
     const r1 = "Yeah.";
     const r2 = "Nah.";
     const r3 = "Why you askin'?";
     const r4 = "Eh, maybe.";
     const r5 = "Sure, I guess.";
     const r6 = "*Never.*";
     var choices = [r1, r2, r3 ,r4 ,r5 ,r6];
     var answer = choices[Math.floor(Math.random()*choices.length)];
     message.channel.send(answer).then().catch(console.error);
   }

});


//commands using ! prefix, defined at the top outside any {}
client.on("message", (message) => {
const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();

  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
    return message.channel.send('You gonna ask me something or what?');
  }

  try {
    command.execute(message, args);
  }

  catch (error) {
    console.error(error);
    message.reply("hey, fuck off.");
  }

});

client.login(token);
