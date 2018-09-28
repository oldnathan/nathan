const Discord = require("discord.js");
const client = new Discord.Client();

console.log("Welcome");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '462347265747451914') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '492406462476451840').send('**Welcome to Bubbles Tumblr**');
},3000);
});

client.login(process.env.BOT_TOKEN);
