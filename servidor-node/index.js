const app = require('express')();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId
const json = require('express').json
const cors = require('cors')

const uri = 'mongodb://elfoestae:root123@localhost:27017';

MongoClient.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true}, (err, client) => {
    if (err) return console.log("deu erro seu merda estuda mais"+err)
    console.log('o andré é um bosta')
    const one = client.db('banco').collection('ColesaoBanco')
 

app.use(cors("http://localhost:3000"))
app.use(json())
app.post("/ae",function(req, res) {
    one.insertOne({
        nome: req.body.nome,
        createAt: new Date,
    }).then(() => {
        res.json(true)
    })
    console.log('está funcionando', req.body)
})
app.listen(3001, () =>
    console.log("servidor ouvindo na posta 3001")
);
})