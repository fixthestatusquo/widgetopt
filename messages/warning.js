const chalk = require('chalk');

module.exports = (msg, filename) => {
  if (!filename) {
    console.log(chalk.red(chalk.bold(msg)));
  } else {
    console.log(chalk.red(chalk.bold(filename)), chalk.red(chalk.bold(msg)));
  }
}