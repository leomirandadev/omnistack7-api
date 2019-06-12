const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    
    async index(req, res) {

        // "-createdAt" serve para ordenar a pesquisa pela data de criação na ordem decrescente
        const posts = await Post.find().sort("-createdAt");

        return res.json( posts );
    },

    async store(req, res) {

        // utilizando desestruturação ES6
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        await sharp(req.file.path)
        .resize(500) // redimenciona para deixar no máximo com 500px de width ou height
        .jpeg({ quality: 70 }) // seta a qualidade como 70%
        .toFile(
            path.resolve(req.file.destination, "resized", image) // coloca o novo arquivo na pasta de resized
        )
        // deleta a imagem no caminho inicial
        fs.unlinkSync( req.file.path );

        // await espera essa operação terminar
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image
        });

        return res.json({ ok: true, result: post});
    }

}