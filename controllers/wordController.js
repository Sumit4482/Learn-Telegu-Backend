const WordService = require('../services/wordService');

class WordController {
    constructor() {
        this.wordService = new WordService();
    }
    async getRandomWords(req, res) {
        try {
            const randomWords = await this.wordService.getRandomWords();
            res.json(randomWords);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    async getAllWords(req, res) {
        try {
            const words = await this.wordService.getAllWords();
            res.json(words);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async addWord(req, res) {
        try {
            const { telegu, english, hindi, pronunciation } = req.body;
            const savedWord = await this.wordService.addWord({ telegu, english, hindi, pronunciation });
            res.status(201).json(savedWord);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getWordById(req, res) {
        try {
            const { id } = req.params;
            const word = await this.wordService.getWordById(id);
            res.json(word);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async updateWord(req, res) {
        try {
            const { id } = req.params;
            const { telegu, english, hindi, pronunciation } = req.body;
            const updatedWord = await this.wordService.updateWord(id, { telegu, english, hindi, pronunciation });
            res.json(updatedWord);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    async deleteWord(req, res) {
        try {
            const { id } = req.params;
            await this.wordService.deleteWord(id);
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = WordController;
