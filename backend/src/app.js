require('dotenv').config()
const express = require('express')
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes')
const app = express()



app.use(express.json())

app.get('/api/hi', (req,res) => {
    res.send("hi");
})


app.use('/api/users', userRoutes);


app.use('/api/rooms', roomRoutes);





module.exports = app;