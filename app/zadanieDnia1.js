//Twój kod
const express = require('express');
const app = express();
app.use(express.static('./public/zadanieDnia/'));

let yes = 0
let no = 0
let maybe = 0


app.get('/vote/:answer', (req, res) => { //np. localhost:3000
    let answer = req.params.answer
    console.log(answer)
    if (answer == "yes") {
        yes += 1
    } else if (answer == "no") {
        no += 1
    } else if (answer == "maybe") {
        maybe += 1
    }
    res.send('Dziękujemy za głos!');
});
/*
app.get('/vote/yes', (req, res) => { //np. localhost:3000
    yes += 1

    res.send('Dziękujemy za głos!');
});

app.get('/vote/no', (req, res) => { //np. localhost:3000
    no += 1
    res.send('Dziękujemy za głos!');
});

app.get('/vote/maybe', (req, res) => { //np. localhost:3000
    maybe += 1
    res.send('Dziękujemy za głos!');
});
*/
app.get('/votes/check', (req, res) => { //np. localhost:3000
    res.send(`oddano ${yes} głosów na tak oraz ${no} głosów na nie,  ${maybe} osób nie wie co ma wybrać`);

});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});