module.exports = {
    getPost(req, res, store) {
        res.status(200).json({ data: store.posts[req.params.postId-1] });
    },
    getPosts(req, res, store) {
        res.status(200).json({ data : store });
    },
    addPost(req, res, store) {
        req.body.id = store.posts.length + 1
        req.body.comments = []
        store.posts.push(req.body)
        res.status(200).json({ data: store, message : store.posts.length + " posts so far" });
    },
    updatePost(req, res, store) {
        // backup post's comments
        let comments = store.posts[req.params.postId].comments
        
        // Update post
        store.posts[req.params.postId - 1] = req.body
        store.posts[req.params.postId - 1].comments = comments
        res.status(201).json({ data: store.posts[req.params.postId], message : "post updated" });
    },
    removePost(req, res, store) {
        store.posts.splice(req.params.postId - 1, 1)
        res.status(204).json({ message : "post deleted"})
    }
}