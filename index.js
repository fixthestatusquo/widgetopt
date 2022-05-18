#!/usr/bin/env node

/**
 * widgetopt
 * changes widget configuration
 *
 * @author 1v4n4 <proca.app>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
const primaryColor = require('./modules/primaryColor');
const inputValid = require('./modules/inputValid');

(() => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

 	const inputs  = inputValid();
	flags.primarycolor &&	primaryColor(inputs);

	debug && log(flags);
})();
