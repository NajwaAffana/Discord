const Discord = require('discord.js');
const client = new Discord.Client(); 

client.on("ready", () => {
  console.log(client.user.tag + " Ready!");
  const channel = client.channels.get("606197843929333779");
  channel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => {
    console.error(e);
  });
});

client.login(process.env.TOKEN);

