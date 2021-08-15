// to create a server we need to require a core module called http module

const http = require('http');

const server = http.createServer((request,response) => {
  response.end('Hey this is my first server ..');
}).listen(8000 , '127.0.0.1' , () => {
  console.log('listening to the port 8000 ...')
})