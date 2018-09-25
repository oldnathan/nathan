const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome");

client.on('ready', () => {
  client.user.setActivity('Bُubbles Servers.', { type: 'Playing' });
  client.user.setStatus("dnd");
});



client.login(process.env.BOT_TOKEN);
