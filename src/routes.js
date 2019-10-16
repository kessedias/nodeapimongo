const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index); //toda vez que o usuário acessar a rota
routes.get("/products/:id", ProductController.show); //consultar
routes.post("/products", ProductController.store); //criar
routes.put("/products/:id", ProductController.update) //atualizar
routes.delete("/products/:id", ProductController.destroy) //deletar



module.exports = routes; // exportação da rota para o server