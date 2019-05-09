module.exports = {
	name:'text_fun',
	description: 'Make him say dumb shit',
	execute(message, args) {
		if (args == 'test') {
			message.channel.send('Test.');
		}

    else (args == '') {

    }
	},
};
