require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });


const app = require('./app');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3001;
mongoose.connect("mongodb+srv://jaden:Sportsman4021@cluster0.eh0ddy1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then( () => {
    if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
    }

})

