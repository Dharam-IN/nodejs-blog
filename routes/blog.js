const {Router} = require('express');
const UserModel = require('../models/user');
const multer  = require('multer')
const path = require('path');
const BlogModel = require('../models/blog');

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


module.exports = router