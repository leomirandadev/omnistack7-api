const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect("mongodb+srv://nodejs0:nodejs0@cluster0-bligv.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

// renomear caminho dos files 
app.use('/files', express.static( path.resolve(__dirname, '..', 'uploads', 'resized') ));
// buscar routes
app.use( require('./routes') );

app.listen(80);