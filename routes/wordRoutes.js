const express = require('express');
const WordController = require('../controllers/wordController');

const router = express.Router();
const wordController = new WordController();

router.get('/words/random', async (req, res) => {
    await wordController.getRandomWords(req, res);
});

router.get('/words', async (req, res) => {
    await wordController.getAllWords(req, res);
});

router.get('/words/getbyid/:id', async (req, res) => {
    await wordController.getWordById(req, res);
});

router.post('/words', async (req, res) => {
    await wordController.addWord(req, res);
});

router.put('/words/:id', async (req, res) => {
    await wordController.updateWord(req, res);
});

router.delete('/words/:id', async (req, res) => {
    await wordController.deleteWord(req, res);
});



module.exports = router;
