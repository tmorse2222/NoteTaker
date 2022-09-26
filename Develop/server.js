const express = require('express');
const path = require('path');
const app = express();
const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    }
);
