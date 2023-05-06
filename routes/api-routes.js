const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.get('/api/notes', (req, res) => {
    const notesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
    res.json(notesData);
});

router.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = {
        id: uuidv4(),
        title,
        text,
    };

    const notesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
    notesData.push(newNote);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesData));
    res.json(newNote);
});

router.delete('/api/notes/:id', (req, res) => {
    const notesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
    const filteredNotesData = notesData.filter((note) => note.id !== req.params.id);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(filteredNotesData));
    res.json(filteredNotesData);
});


module.exports = router;