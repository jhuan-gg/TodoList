const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;

const uri = 'mongodb://elfoestae:root123@localhost:27017';

MongoClient.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true}, (err, client) => {
    if (err) return console.log(err)
    console.log('o andré é um bosta')
    const n1 = client.db("banco").collection("ColesaoBanco")
    
})

app.listen(3001, () =>
    console.log("servidor ouvindo na posta 3001")
);
app.post("/ae",function(req, res) {
    ColesaoBanco.insertOne({
        nome: req.body.nome,
        idade: req.body.idade,
        createAt: new Date,
        qualidade: req.body.qualidade,
    }).then(() => {
        res.json(true)
    })
    console.log('está funcionando')
})