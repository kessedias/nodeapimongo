const express = require('express');
//definindo o app com a varíavel express, que é declarada através do const
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json()); //permite que envie dados para aplicação em formato de json
app.use(cors());

//Iniciando o DB 
mongoose.connect('mongodb://localhost:27017/nodeapi',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//npm instal require-dir
requireDir('./src/models');

//const Product = mongoose.model('Product');

//Rotas
app.use("/api", require("./src/routes"));
//req = requisição para o servidor
//res = é o retorno 

app.listen(3001); //ouvir a porta

