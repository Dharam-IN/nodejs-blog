const {Router} = require('express');
const UserModel = require('../models/user');
const multer  = require('multer')
const path = require('path');
const BlogModel = require('../models/blog');
const CommentModel = require('../models/comment');

const router = Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(`./public/uploads`));
    },
    filename: function(req, file, cb){
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename)
    }
})

const upload = multer({storage: storage});

router.get('/add-blog', (req, res) => {
    res.render("addblog", {
        user: req.user
    });
})

router.get("/:id", async (req, res) => {
    const blog = await BlogModel.findById(req.params.id).populate("createdBy");
    const comments = await CommentModel.find({blog: req.params.id}).populate("createdBy")

    return res.render("blog",{
        user: req.user,
        blog,
        comments
    })
})

router.post("/", upload.single("coverImageUrl") , async (req, res) => {
    const {title, body} = req.body;
    console.log(req.user);

    const blog = await BlogModel.create({
        title,
        body,
        createdBy: req.user.id,
        coverImageUrl: `/uploads/${req.file.filename}`
    })

    return res.redirect(`/blog/${blog._id}`);
})


// COMMENTS ROUTE

router.post("/comment/:blogId", async(req, res) => {
    // console.log(req.user)
    const comment = CommentModel.create({
        content: req.body.content,
        blog: req.params.blogId,
        createdBy: req.user.id
    });

    return res.redirect(`/blog/${req.params.blogId}`)

})


module.exports = router