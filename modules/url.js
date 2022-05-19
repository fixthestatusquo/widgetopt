const fs = require('fs');
const validator = require('validator');
const success = require('../messages/success');
const warning = require('../messages/warning');

module.exports = (args) => {
  if (!validator.isURL(process.argv[3])) {
    warning('URL not valid.');
    process.exit(1);
  }
  args.map(arg => {
    if (!arg.fileContent.org) {
      arg.fileContent.org = {url: process.argv[3]};
    }
    arg.fileContent.org.url = process.argv[3];
      fs.writeFile(arg.fileName, JSON.stringify(arg.fileContent, null, '\t'), function (err) {
        if (err) throw err;
        success('Organization URL changed', arg.fileName);
      });
  });
}