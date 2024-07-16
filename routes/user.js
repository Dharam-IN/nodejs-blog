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

    const user = UserModel.passwordMatched(email, password)

    console.log("User:- ", user);
    return res.redirect("/")
})

module.exports = router