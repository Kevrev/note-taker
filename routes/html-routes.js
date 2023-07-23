const express = require('express');
const path = require('path');

const router = express.Router();

// getting the notes.html page when the route is /notes
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

module.exports = router;