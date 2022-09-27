// Dependencies
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const uniqid = require('uniqid');
// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Sets initial page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
// Sets notes page route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
// Displays all notes on left side of page
app.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(notes);
});
// Posts new note to db.json
app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const newNote = req.body;
    // Sets id for new note
    newNote.id = uniqid();
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});
// Deletes note from db.json
app.delete('/api/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const noteId = req.params.id;
    const newNotes = notes.filter((note) => note.id !== noteId);
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
    res.json(newNotes);
});
// initiates server
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    }
);