const Word = require('../models/Word');

/**
 * Service for handling Telegu word operations.
 */
class WordService {
	async getAllWords() {
		try {
				const words = await Word.find();
				return words;
		} catch (error) {
				throw new Error('Failed to fetch words from the database');
		}
}

async getRandomWords() {
	try {
			const words = await Word.aggregate([{ $sample: { size: 2 } }]);
			return words;
	} catch (error) {
			throw new Error('Failed to fetch random words from the database');
	}
}

    /**
     * Adds a new Telegu word to the database.
     * @param {Object} wordData - The data for the new Telegu word.
     * @returns {Promise<Object>} The newly added Telegu word.
     */
				async addWord(wordData) {
						try {
								const newWord = new Word(wordData);
								const savedWord = await newWord.save();
								return savedWord;
						} catch (error) {
								throw new Error('Failed to add word to the database');
						}
				}
		
				async getWordById(id) {
					try {
							const word = await Word.findById(id);
							if (!word) {
									throw new Error('Word not found');
							}
							return word;
					} catch (error) {
							throw new Error('Failed to fetch word from the database');
					}
			}
		
				async updateWord(id, wordData) {
						try {
								const updatedWord = await Word.findByIdAndUpdate(id, wordData, { new: true });
								if (!updatedWord) {
										throw new Error('Word not found');
								}
								return updatedWord;
						} catch (error) {
								throw new Error('Failed to update word in the database');
						}
				}
		
				async deleteWord(id) {
						try {
								const deletedWord = await Word.findByIdAndDelete(id);
								if (!deletedWord) {
										throw new Error('Word not found');
								}
						} catch (error) {
								throw new Error('Failed to delete word from the database');
						}
				}
	
		
}

module.exports = WordService;
