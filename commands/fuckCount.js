/*module.exports = {
  name: 'fuckCount',
  description: 'sql tutorial garbage',
  args: true,
  execute(message, args) {
    const Discord = require("discord.js");
    const index = require('././index.js');
    if (args.length != 1) {
      message.channel.send("What the hell do you want?");}

    else if (args[0] === "points") {message.channel.send(`You've said fuck ${score.points} times and are level ${score.level} of giving a fuck.`);}
    else if (args[0] === "leaderboard") {
      const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);
      const embed2 = new Discord.RichEmbed()
        .setTitle("Leaderboard")
        .setAuthor(client.user.username, client.user.avatarURL)
        .setDescription("Top 10 Sailor-Mouths")
        .setColor("#00f9ff");

        for(const data of top10) {
          embed2.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
        }
        return message.channel.send({embed2});
    }
  },
};*/
