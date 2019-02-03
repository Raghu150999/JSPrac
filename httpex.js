const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        console.log('Hey there');
        res.write('Hello World');
        res.end();
    }
    else
    if(req.url === '/raghu')
    {
        res.write('Hey there welcome to my website');
        res.end();
    }
});

server.listen(3000);

console.log("Listening on port...");
