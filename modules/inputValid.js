const fileValid = require('./fileValid');
const warning = require('../messages/warning');
const isHexcolor = require('is-hexcolor')

module.exports = () => {
  if (process.argv.length < 5) {
    warning('Input not valid. Use -help for more info.');
    process.exit(1);
  }

  if (!isHexcolor(process.argv[3])) {
    warning('Hex color code not valid.');
    process.exit(1);
  }

  let args = process.argv.slice(4).map(arg => fileValid(arg)).filter(arg => arg);
  if (args.length === 0) {
    process.argv.length === 5 ? warning('Use -help for more info.') : warning('Files not valid. Use -help for more info.');
    process.exit(1);
  }
  return args;
}