const primeFactors = require('../api/primeFactors');

const primes = (req, res) => {
  let data = '';

  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    const { input } = JSON.parse(data);
    const output = primeFactors(Number(input));
    res.end(JSON.stringify({ result: output }));
  });
};

module.exports = primes;
