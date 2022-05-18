const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `widgetopt`,
		tagLine: `by 1v4n4`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#FFFF00',
		color: '#000000',
		bold: true,
		clear
	});
};
