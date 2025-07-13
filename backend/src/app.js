require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

app.get('/api/hi', (req,res) => {
    res.send("hi");
})


module.exports = app;