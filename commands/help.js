const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    execute(message, args) {
      var hEmbed = new Discord.RichEmbed()
        .setTitle("**IS THIS WHAT YOU WANT?!**")
        .setAuthor("fuckfuckfuckfuckfuckfuck", "https://cdn.discordapp.com/attachments/500773668440375297/500817119865208863/fuck.JPG")
        .setColor("#00f9ff")
        .setDescription("All these landmines, so little time")
        .setFooter("Next time he comes here, we're gonna GET his ass")
        .setImage("https://cdn.discordapp.com/attachments/500773668440375297/500817119865208863/fuck.JPG")
        .addField("Landmines",
          "one minute \nknee \nnose \nnightlife \ndrink \nrichie dagger \ndagger.help")
        .addField("Additional info", "Taking a ride to my old haunt \nshe's in my blood, she resides in my nightlife \nmy favorite color's candy apple girl");

      message.channel.send(hEmbed);
        //const data = [];
        //const {commands} = message.client;
    },
};
