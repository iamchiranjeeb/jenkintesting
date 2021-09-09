const express = require('express');

const app = express();


const PORT = process.env.PORT || 2001

app.get('/', (req,res) => {
    res.send("Hello Looser");
});

app.get('/looser', (req,res) => {
    res.json({message: "Looser from Jenkins !"});
});

app.get('/kevin',(req,res) => {
    res.json({message: "setfy"});
});

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});