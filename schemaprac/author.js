let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: String,
    pages: Number
});

let AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

let Author = mongoose.model('authors', AuthorSchema);

module.exports = Author;