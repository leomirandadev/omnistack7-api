const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

// metodo cadastrar post chamando a função do controller desejado
routes.post('/posts', upload.single('image'), PostController.store);
// metodo listar todos os posts
routes.get('/posts', PostController.index);

// :id se refere ao id do post no banco que esta sendo enviado como parametro
routes.post('/posts/:id/like', LikeController.store);

// export routes
module.exports = routes;