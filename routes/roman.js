const romanToNum = require('../api/romanToNum');

const roman = (req, res) => {
  let data = '';

  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    const { input } = JSON.parse(data);
    const output = romanToNum(input);
    res.end(JSON.stringify({ result: output }));
  });
};

module.exports = roman;
