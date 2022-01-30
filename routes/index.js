const path = require('path');
const fs = require('fs');
const home = require('./home');
const roman = require('./roman');
const primes = require('./primes');
const notFound = require('./notFound');

const router = (req, res) => {
  if (req.url === '/') {
    return home(req, res);
  }

  if (req.url === '/api/roman') {
    return roman(req, res);
  }

  if (req.url === '/api/primes') {
    return primes(req, res);
  }

  const filepath = path.join(__dirname, '..', 'public', req.url);

  return fs.readFile(filepath, (err, data) => {
    if (err) {
      console.error(err);
      return notFound(req, res);
    }

    return res.end(data);
  });
};

module.exports = router;
