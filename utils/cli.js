const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	help: {
		type: `boolean`,
		alias: `h`,
		desc: `Print help`
	},
	primarycolor: {
		type: `boolean`,
		alias: `p`,
		desc: `Change primary color`
	},
	url: {
		type: `boolean`,
		alias: `u`,
		desc: `Change organization URL`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const footer = 'Add file name(s) add argument(s) or a range of numbers';
	;

const helpText = meowHelp({
	name: `wopt`,
	flags,
	commands,
	footer
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
