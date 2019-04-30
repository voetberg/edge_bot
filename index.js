const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message',message => {
  if (message.content == '!test'){
    message.channel.send('Hello.');
  }
});

client.login(config.token);
