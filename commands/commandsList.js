const Discord = require("discord.js");
const embed1 = new Discord.RichEmbed()
  .setTitle("**IS THIS WHAT YOU WANT?!**")
  .setAuthor("fuckfuckfuckfuckfuckfuck", "https://cdn.discordapp.com/attachments/500773668440375297/500817119865208863/fuck.JPG")
  .setColor("#00f9ff")
  .setDescription("available commands")
  .setFooter("Next time he comes here, we're gonna GET his ass")
  .setImage("https://cdn.discordapp.com/attachments/500773668440375297/500817119865208863/fuck.JPG")
  .addField("Commands", "in progress")
  .addField("Additional info", "Taking a ride to my old haunt \nshe's in my blood, she resides in my nightlife \nmy favorite color's candy apple girl");

module.exports = {
  name: 'commandsList',
  description: 'list of commands, please work',
  execute(message, args) {
    message.channel.send({embed1});
  },
};
