const fs = require('fs');
const success = require('../messages/success');

module.exports = (inputs) => {
  inputs.map(input => {
    input.fileContent.layout.primaryColor = process.argv[3];
    fs.writeFile(input.fileName, JSON.stringify(input.fileContent, null, '\t'), function (err) {
      if (err) throw err;
      success('Color changed!', input.fileName);
    });
  });
}