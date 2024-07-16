const {Router} = require('express');
const UserModel = require('../models/user');

const router = Router();

router.get('/signin', (req, res) => {
    res.render("signin");
})


router.get('/signup', (req, res) => {
    res.render("signup");
})

router.post('/signup', async(req, res) => {
    const {name, email, password} = req.body;
    console.log("Req Body:- ", req.body)

    await UserModel.create({
        name,
        email,
        password
    });

    return res.redirect('/');
})

router.post('/signin', async(req, res) => {
    const {email, password} = req.body;

    try {
        const token = await UserModel.passwordMatchedAndGenerateToken(email, password)

        return res.cookie('token', token).redirect('/');
    } catch (err) {
        return res.render('signin', {error: "Incorrect Password and Email"});
    }
})

router.get("/logout", (req, res) => {
    return res.clearCookie("token").redirect('/')
})

module.exports = router