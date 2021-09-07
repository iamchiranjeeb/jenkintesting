const express = require('express');

const app = express();


const PORT = process.env.PORT || 2001

app.get('/', (req,res) => {
    res.send("Hello Looser");
});

app.get('/', (req,res) => {
    res.json({message: "Looser from jenkins."});
});


app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});