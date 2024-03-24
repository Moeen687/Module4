const mongoose = require('mongoose');

const bookExSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const BookEx = mongoose.model('BookEx', bookExSchema);

module.exports = BookEx;
