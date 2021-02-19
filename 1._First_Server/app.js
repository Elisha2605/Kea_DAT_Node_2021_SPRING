const express = require('express')
const app = express();
const Student = require('./Student.json')

app.get("/", (req, res) => {
    res.send({});
});

app.get("/welcome", (req, res) => {
    res.send("<h1>Welcome</h1>");
});

app.get("/me", (req, res) => {
    res.send({
        "Aïcha": "is my life"
    })
});


app.get("/Students", (req, res) => {
    res.send({Student})
});


app.listen(8080);