const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome");

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity('Music and some rest', { type: 'Playing' });
  client.user.setStatus("dnd");
});


client.login(process.env.BOT_TOKEN);
