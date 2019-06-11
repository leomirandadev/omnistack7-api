const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer(uploadConfig);

// metodo cadastrar post chamando a função do controller desejado
routes.post('/posts', upload.single('image'), PostController.store);
// metodo listar todos os posts
routes.get('/posts', PostController.index);

// export routes
module.exports = routes;