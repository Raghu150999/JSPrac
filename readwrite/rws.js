let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function (chunk) {
    console.log('chunk received');
    myWriteStream.write(chunk);
});

// Aliter : myReadStream.pipe(myWriteStream);