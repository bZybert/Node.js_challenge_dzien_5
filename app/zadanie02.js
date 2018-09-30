//Twój kod
const express = require('express');
const app = express();

app.get('/', (req, res) => { //np. localhost:3000
    res.send('Home page');
});

let name = "";
let tab = []
app.get('/name/set/:imie', (req, res) => { //np. localhost:3000/contact
    name = req.params.imie;
    tab.push(req.params.imie)
    res.send('Imię zostało zapisane');
});
app.get('/name/show', (req, res) => { //np. localhost:3000/contact

    res.send(`Witaj ${name}`);
});

app.get('/name/check', (req, res) => { //np. localhost:3000/contact
    tab.includes(name) ? res.send('Imię było już wcześniej podane') : res.send('Wdzimy się pierwszy raz')
    console.log(tab)

});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});