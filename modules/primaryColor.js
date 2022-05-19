const fs = require('fs');
const isHexcolor = require('is-hexcolor')
const success = require('../messages/success');
const warning = require('../messages/warning');

module.exports = (args, input) => {
  if (!isHexcolor(input)) {
    warning('Hex color code not valid.');
    process.exit(1);
  }
  args.map(arg => {
    if (arg.fileContent.layout) {
      arg.fileContent.layout.primaryColor = process.argv[3];
      fs.writeFile(arg.fileName, JSON.stringify(arg.fileContent, null, '\t'), function (err) {
        if (err) throw err;
        success('Color changed', arg.fileName);
      });
    } else {
      warning('Invalid config file', arg.fileName,);
    }

  });
}