const Discord = require("discord.js");
const client = new Discord.Client();

console.log("Welcome");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '462347265747451914') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '492406462476451840').send('**# Willkommen Bei Bُubbles Tumblr .**');
},3000);
});
client.on('ready', () => {
  client.user.setActivity('Some of the music has comfort', { type: 'Playing' });
  client.user.setStatus("dnd");
});

client.login(process.env.BOT_TOKEN);
