const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQ2NjM5NzExMDI3NzI0MzAw.X0DQaw.Igkmr2PS8xpRcxH0BAiRH2FwsOA';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);