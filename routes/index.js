const router = require('express').Router();
const comments = require('./comments')
const posts = require('./posts')

let store = {}
store.posts = []

router.get('/', (req, res, store) => {
    res.status(200).json({message: 'Server Connected'});
})


// Manage posts
router.get('/posts/:postId', (req, res) => {
    posts.getPost(req, res, store)
})
router.get('/posts', (req, res) => {
    posts.getPosts(req, res, store)
})
router.post('/posts', (req, res) => {
    posts.addPost(req, res, store)
})
router.put('/posts/:postId', (req, res) => {
    posts.updatePost(req, res, store)
})
router.delete('/posts/:postId', (req, res) => {
    posts.removePost(req, res, store)
})

// Manage comments
router.get('/posts/:postId/comments/:commentId', (req, res) => {
    comments.getComments(req, res, store)
})
router.get('/posts/:postId/comments', (req, res) => {
    comments.getComments(req, res, store)
})
router.post('/posts/:postId/comments', (req, res) => {
    comments.addComment(req, res, store)
})
router.put('/posts/:postId/comments/:commentId', (req, res) => {
    comments.updateComment(req, res, store)
})
router.delete('/posts/:postId/comments/:commentId', (req, res) => {
    comments.removeComment(req, res, store)
})

module.exports = router;