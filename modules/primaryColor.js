const fs = require('fs');
const isHexcolor = require('is-hexcolor')
const warning = require('../messages/warning');
const writeFile = require('../modules/writeFile');

module.exports = (args) => {
  if (!isHexcolor(process.argv[3])) {
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