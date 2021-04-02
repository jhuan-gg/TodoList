const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;

const uri = 'mongodb://elfoestae:root123@localhost:27017';

MongoClient.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true}, (err, client) => {
    if (err) return console.log(err)
    console.log('o andré é um bosta')
    
})

app.listen(3001, () =>
    console.log("servidor ouvindo na posta 3001")
);