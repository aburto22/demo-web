const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello world!');
});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
