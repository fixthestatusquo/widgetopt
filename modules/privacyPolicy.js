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
      arg.fileContent.org = {privacyPolicy: process.argv[3]};
    }
    arg.fileContent.org.privacyPolicy = process.argv[3];
      writeFile(arg.fileName, arg.fileContent);
  });
}