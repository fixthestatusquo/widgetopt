const fs = require('fs');
const warning = require('../messages/warning');

module.exports = (arg) => {
  const fileName = isNaN(arg) ? arg : arg + '.json';
  const path = './' + fileName;
  const isFile = fs.existsSync(path);
  if (!isFile) {
    warning('File does not exist', fileName);
    return false;
  }
  const fileContent = JSON.parse(fs.readFileSync(path, 'utf8'));
  return { fileName, fileContent };
}