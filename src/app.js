// app.js
const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
	res.statuscode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello, I am Todsavad Tangtortan and I am using NodeJS');
	});
		
	server.listen(port, hostname , () => {
	console.log('Server running at: ' + hostname + port);
	});

