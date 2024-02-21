/**
 * Represents a Telegu word.
 * @typedef {Object} Word
 * @property {string} telegu - The Telegu word.
 * @property {string} english - The English meaning of the word.
 * @property {string} hindi - The Hindi meaning of the word.
 * @property {string} pronunciation - The pronunciation of the word in English.
 */

const mongoose = require('mongoose');

/**
 * Schema for Telegu words.
 * @type {import('mongoose').Schema<Word>}
 */
const wordSchema = new mongoose.Schema({
    telegu: {
        type: String,
        required: true
    },
    english: {
        type: String,
        required: true
    },
    hindi: {
        type: String,
        required: true
    },
    pronunciation: {
        type: String,
        required: true
    }
});

/**
 * Mongoose model for Telegu words.
 * @type {import('mongoose').Model<Word>}
 */
const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
