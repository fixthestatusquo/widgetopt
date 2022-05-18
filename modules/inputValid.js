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

  let args = [];
  const isRange = process.argv[4].match(/^[0-9]+[-][0-9]+$/)

  if (process.argv.length === 5 && isRange) {
    const range = process.argv[4].split('-');
    let i = parseInt(range[0]);
    while (i <= parseInt(range[1])) {
      args.push(fileValid(i));
      i++;
    }
  } else {
    args = process.argv.slice(4).map(arg => fileValid(arg));
  }

  args = args.filter(arg => arg)

  if (args.length === 0) {
    (process.argv.length === 5 && !isRange) ? warning('Use -help for more info.') : warning('Files not valid. Use -help for more info.');
    process.exit(1);
  }

  return args;
}