const Discord = require("discord.js");
const client = new Discord.Client();

const embed = new Discord.RichEmbed()
  .setTitle("**IS THIS WHAT YOU WANT?!**")
  .setAuthor("fuckfuckfuckfuckfuckfuck", "https://cdn.discordapp.com/attachments/500773668440375297/500817119865208863/fuck.JPG")
  .setColor("#00f9ff")
  .setDescription("All these landmines, so little time")
  .setFooter("Next time he comes here, we're gonna GET his ass")
  .setImage("https://cdn.discordapp.com/attachments/500773668440375297/500817119865208863/fuck.JPG")
  .addField("Landmines",
    "one minute \nknee \nnose \nnightlife \ndrink \nelement \nrichie dagger")
  .addField("Additional info", "Taking a ride to my old haunt \nshe's in my blood, she resides in my nightlife \nmy favorite color's candy apple girl")
  .addField("Ask me questions, I fucking dare you!");

module.exports = (embed);
