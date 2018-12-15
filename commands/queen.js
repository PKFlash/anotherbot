module.exports = {
  name: 'queen',
  description: 'the best band',
  execute(message, args) {
    const v1 = "https://www.youtube.com/watch?v=YT0PYyUYi0Y";
    const v2 = "https://youtu.be/rc2AuAXl5lI";
    const v3 = "https://youtu.be/aCy3pLn1W-U";
    const v4 = "https://youtu.be/nwN6dPNXklg";
    const v5 = "https://youtu.be/nwN6dPNXklg";
    const v6 = "https://youtu.be/jO9C7frk2ss";
    const v7 = "https://youtu.be/ktYlzVYQbwY";
    var vids = [v1, v2, v3, v4, v5, v6, v7];
    var post = vids[Math.floor(Math.random()*vids.length)];
    message.channel.send(post);
  },
};
