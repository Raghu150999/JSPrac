var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
        console.log(req.url);
    if(req.url === '/')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var readStream = fs.createReadStream(__dirname + '/main.html', 'utf8');
        readStream.pipe(res);
    }
    else if(req.url === '/main.css')
    {
        res.writeHead(200, {'Content-Type': 'text/css'});
        var readStream = fs.createReadStream(__dirname + '/main.css', 'utf8');
        readStream.pipe(res);
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Something went wrong fella!");
    }
});

server.listen(3000, '127.0.0.1');

console.log('Listening...');
