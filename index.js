const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if (!message.content.starsWith(prefix) || message.author.bot) return;

  const arg = message.content.slice(prefix.length).split(/ +/);
  const command  = arg.shift().toLowerCase(); // Think about removing non alpha char

  //Build command list: 

	}
});

client.login(config.token);
