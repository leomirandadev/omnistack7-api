const Post = require('../models/Post');

module.exports = {
    
    async index(req, res) {

    },

    async store(req, res) {

        // utilizando desestruturação ES6
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

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