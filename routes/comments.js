module.exports = {
    getComment(req, res, store) {
        let comment = store.posts[req.params.postId - 1].comments[req.params.commentId - 1]
        res.status(200).json({ data: comment });
    },
    getComments(req, res, store) {
        let comments = store.posts[req.params.postId - 1].comments
        res.status(200).json({ data: comments });
    },
    addComment(req, res, store) {
        store.posts[req.params.postId - 1].comments.push(req.body)
        res.status(200).json({ data: store.posts[req.params.postId - 1], message: "a new comment \n" + req.body+ " has been added" });
    },
    updateComment(req, res, store) {
        store.posts[req.params.postId - 1].comments[req.params.commentId - 1] = req.body.comment
        res.status(200).json({ data: store.posts[req.params.postId - 1], message: "the comment has been updated" });
    },
    removeComment(req, res, store) {
        let comment = store.posts[req.params.postId - 1].comments[req.params.commentId - 1]
        store.posts[req.params.postId - 1].comments.splice(req.params.commentId - 1, 1)
        res.status(200).json({ message: 'the comment "' + comment+ '" has been removed' });
    }
}