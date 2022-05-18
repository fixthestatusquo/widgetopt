const chalk = require('chalk');
module.exports = (msg, filename) => {
  console.log(chalk.black(chalk.bgYellow(filename)), ' ', chalk.bold(chalk.yellow(msg)));
}