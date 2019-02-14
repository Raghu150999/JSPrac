let assert = require('assert');
let User = require('../schemaprac/models');


describe('Finding data', function () {

    let user;
    beforeEach(function (done) {
        user = new User({
            username: 'Raghu',
            password: 'Pass'
        });
        user.save().then(function () {
            done();
        });
    });

    it('Find user', function (done) {
       
        User.findOne({username: 'Raghu'}).then(function (result) {
            assert(result.username === 'Raghu');
            done();
        });
    });

    it('Find User by ID', function (done) {
        User.findOne({_id: user._id}).then(function (result) {
            assert(result._id.toString() === user._id.toString());
            done();
        });
    });

    it('Delete record', function (done) {
        User.findOneAndDelete({username: 'Raghu'}).then(function () {
            User.findOne({username: 'Raghu'}).then(function (result) {
                assert(result === null);
                done();
            });
        });
    });

    it('Update record', function (done) {
        User.findOneAndUpdate({username: 'Raghu'}, {username: 'R'}).then(function () {
            User.findOne({_id: user._id}).then(function (result) {
               assert(result.username === 'R'); 
               done(); 
            });
        });
    });
});