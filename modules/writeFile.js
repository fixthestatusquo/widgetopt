const fs = require('fs');
const success = require('../messages/success');

module.exports = (fileName, fileContent) => {
  fs.writeFile(fileName, JSON.stringify(fileContent, null, '\t'), function (err) {
    if (err) throw err;
    success('Privacy URL changed', fileName);
  });
}