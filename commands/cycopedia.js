module.exports = {
  name: 'cycopedia',
  description: 'the big one',
  execute(message, args) {
  if(message.member.roles.some(role => role.name === 'Basket Case Boy')) {
      message.channel.send("Test successful.");
  }
  //Add, delete, and edit commands
  if(!message.member.roles.some(role => role.name === 'Basket Case Boy')) {
        return message.reply("Nice try.");
      }
    },
};
