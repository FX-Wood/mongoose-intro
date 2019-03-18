const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    releaseYear: Number,
    rating: String,
    cast: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);
