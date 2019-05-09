const Discord = require('discord.js');
const { prefix, token, comm_arr } = require('./config.json');
const fs = require('fs')

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
});

for (const command of comm_arr) {
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const arg = message.content.slice(prefix.length).split(/ +/);
	const commandName = arg.shift().toLowerCase(); // Think about removing non alpha char

	if (!client.commands.has(commandName)) return;
	const command = client.command.get(commandName);

	try {
		command.execute(message, arg);
	}
	catch (error) {
		console.error(error);
		message.reply('Fuck you I guess');
	}

});

client.login(token);
