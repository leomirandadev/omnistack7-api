const Post = require('../models/Post');

module.exports = {
    
    async store(req, res) {

        // busca pelo id enviado no parametro da rota
        const post = await Post.findById(req.params.id);
        // adiciona um ao objeto
        post.likes ++;
        // salva a alteração do objeto no mongo
        await post.save();

        return res.json(post);
    }

}