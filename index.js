var http = require('http'); 
const fs = require('fs');

const homePage = fs.readFileSync('./server/public/index.html');
const codePage = fs.readFileSync('./server/public/code.html');

var server = http.createServer(function (req, res) {  
  if (req.url == '/coding-nomads') { 
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.end(homePage);
  }  
  if (req.url == '/coding-nomads/code') { 
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.end(codePage);
  } else {
  res.end('Invalid Request!');
  }
});



server.listen(3000); 

console.log('Node.js web server at port 3000 is running..')