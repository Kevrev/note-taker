const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    console.log('Reached the /notes route');
    res.sendFile(__dirname + '/public/notes.html');
  });


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });