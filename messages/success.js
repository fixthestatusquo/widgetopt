const chalk = require('chalk');
module.exports = (msg, filename) => {
  console.log(chalk.yellow(chalk.bold(filename)), chalk.yellow(msg));
}