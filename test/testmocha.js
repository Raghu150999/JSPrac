let assert = require('assert');
let User = require('../schemaprac/models');


describe('Saving data', function () {

    it('save user', function (done) {
        let user = new User({
            username: 'Raghu',
            password: 'Pass'
        });
        user.save().then(function () {
            assert(user.isNew === false);
            done();
        });
    });
});