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
const argsValid = require('./modules/argsValid');
const primaryColor = require('./modules/primaryColor');
const url = require('./modules/url');

(() => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	const args = argsValid();
	flags.primarycolor && primaryColor(args);
	flags.url && url(args);
})();
