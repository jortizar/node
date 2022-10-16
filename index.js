const http = require('http');
const color = require('colors');

const server = http.createServer(dom);

function dom(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello World!</h1>');
    res.end();
    }

server.listen(3000, () => {
    console.log('Server is running on port 3000'.green);
});

