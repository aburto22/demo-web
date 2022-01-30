const fs = require('fs');
const path = require('path');

const home = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, data) => {
    if (err) {
      console.error(err);
    }
    return res.end(data);
  });
};

module.exports = home;
