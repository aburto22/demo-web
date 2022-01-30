const http = require('http');
const router = require('./routes');

const server = http.createServer(router);

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
