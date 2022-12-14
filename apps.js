const http = require('node:http');

const hostname = '127.0.0.1';
const port = 443;

const server = http.createServer((req, res) => {
  if (req.type != 'GET'){
    let body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    req.on("end", () => {
      body = Buffer.concat(body);
      body = body.toString();
      console.log(body);
    });
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
