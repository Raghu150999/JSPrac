let express = require('express');
let bodyParser = require('body-parser');
// BodyParser middleware to parse forms

var urlencodedParser = bodyParser.urlencoded({ extended: false });

let app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/text', function (req, res) {
    console.log(req.query); // query string converted to object
    res.send('Some text');
});


// Use express middleware
// app.use('/assets', function (req, res, next) {
//     console.log(req.url);
//     res.send('Hey');
//     next();
// });

// Using static assets
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html');
    // Aliter 
    // res.render('index.ejs');
});

app.post('/', urlencodedParser, function (req, res) {
   console.log(req.body);
    res.render('index.ejs', req.body);
});

app.get('/main.html', function (req, res) {
    res.sendFile(__dirname + '/main.html');
})

// Not the right way to do use middleware.

// app.get('/:filename', function (req, res) { 
//     res.sendFile(__dirname + '/' + req.params.filename);
// });

app.get('/profile/:id', function (req, res) {
    res.send('Your ID is : ' + req.params.id);
});

app.get('/profiles/:name', function (req, res) {
    let data = {age: 16, branch: 'CS', hobbies: ['coding', 'basketball', 'eating']};
    res.render('profile', {username: req.params.name, data: data});
});


