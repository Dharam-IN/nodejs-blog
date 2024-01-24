const express = require('express')
const app = express();


// Middleware
// app.use(function(req, res, next){
//     // console.log("middleware working")
//     next();
//     console.log(res)
// })


// EJS File
app.set("view engine", "ejs")

app.use(express.static('./public'))

// Routers
app.get("/", function(req,res){
    res.render("index", {location: "India"})
})

app.get("/profile", function(req, res){
    res.send("Hello From Profile")
})

app.get("/profile/:dynamicurl", function(req, res){
    res.send(`Hello from ${req.params.dynamicurl}`)
})

app.listen(3001)
