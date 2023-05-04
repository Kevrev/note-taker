const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/notes', (req, res) => {
    console.log('Reached  /notes route');
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

module.exports = router;