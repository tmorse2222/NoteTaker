const fs = require('fs');
const router = require('express').Router();

router.get('/notes', (req, res) => {
//   get JSON notes from db.json
    let data = fs.readFileSync('./Develop/db/db.json', 'utf8');
    res.json(JSON.parse(data));
});