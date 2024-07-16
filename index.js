const express = require('express');
const path = require('path');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const connectDB = require('./db/connectDB');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');
const BlogModel = require('./models/blog');

const app = express();
const PORT = 8000;


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))


app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie('token'));
app.use(express.static(path.resolve('./public')))

// DB
connectDB('mongodb://127.0.0.1:27017/blogapp').then(() => console.log("Database Connected")).catch(() => console.log("Error in DB Connection"))

app.use('/user', userRouter)
app.use('/blog', blogRouter)

app.get('/', async (req, res) => {
    const allblogs = await BlogModel.find();
    res.render("home", {
        user: req.user,
        blogs: allblogs
    })
})


app.listen(PORT, () => console.log(`Server is Running at ${PORT}`));