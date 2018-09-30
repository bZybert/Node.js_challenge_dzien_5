//Twój kod
const express = require('express');
const app = express();

app.get('/', (req, res) => { //np. localhost:3000
    res.send('Hello, World!');
});

app.get('/:first/:second', (req, res) => { //np. localhost:3000/contact
    let first = Number(req.params.first);
    let second = Number(req.params.second);
    res.send('suma liczb podanych w ścieżkach: ' + first + "+" + second + "=" + (first + second));
});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});