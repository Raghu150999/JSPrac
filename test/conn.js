var mongoose = require('mongoose');

//ES6 promises
mongoose.Promise = global.Promise;

//Connecting before running tests.
before(function (done) {
    mongoose.connect('mongodb://localhost/mydb', {useNewUrlParser: true});

    mongoose.connection.once('open', function () {
        console.log('Connection made');
        done();
    }).on('error', function (error) {
        console.log('Connection Error : ', error);
        done();
    });
});

after(function (done) {
    mongoose.connection.close();
    done();
});

//Droppping the collection before each test.
beforeEach(function (done) {
    mongoose.connection.collections.users.drop(function () {
        done();
    });
});
