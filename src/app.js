const express = require('express');
const path = require('path')

const app = express();
const staticPath = path.join(__dirname,'../public')

app.use(express.static(staticPath))

app.get("/",(req,res) => {
    res.send("Welcome To home Page");
})
app.get("/about",(req,res) => {
    res.send("Welcome To about Page");
})
app.get("/home",(req,res) => {
    res.send("Welcome To home Page");
})
app.get("/student",(req,res) => {
    res.send("Welcome To student Page");
})
app.get("/json",(req,res) => {
    res.json([
        {
            id: 1,
            name: "Scale Up",
            mo_no: 8888888888,
        },
        {
            id: 2,
            name: "Scale Up Join",
            mo_no: 8888888888,
        },
        {
            id: 3,
            name: "Join Scale Up",
            mo_no: 8888888888,
        },
        {
            id: 4,
            name: "Scale Up",
            mo_no: 8888888888,
        },
    ])
})

app.get("/*",(req,res) => {
    res.send("<h1>404 Page Not Found</h1>");
})


app.listen(3000)