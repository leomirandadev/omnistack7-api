const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://nodejs0:nodejs0@cluster0-bligv.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

app.use( require('./routes') );

app.listen(3000);