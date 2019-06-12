const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server( app );
// inserir as propriedades do app no websocket 
const io = require('socket.io')(server);

mongoose.connect("mongodb+srv://nodejs0:nodejs0@cluster0-bligv.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

// middleware que disponibiliza o websocket para todas as rotas
app.use((req, res, next) => {
    req.io = io;
    next();
})

// permite o acesso a API por qualquer domínio
app.use( cors() );
// renomear caminho dos files 
app.use('/files', express.static( path.resolve(__dirname, '..', 'uploads', 'resized') ));
// buscar routes
app.use( require('./routes') );

app.listen(80);