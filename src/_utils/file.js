const fs = require('fs');
const crypto = require('crypto');

function calcFileHash(filePath) {
  if (process.env.NODE_ENV==='development') {
    return '123';
  }
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

module.exports = {
  calcFileHash
}
