const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/movies', { useNewUrlParser: true });
const app = express()

const port = process.env.PORT || 3001

const db = mongoose.connection;
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
});
db.on('error', err => console.log(`Database error: \n ${err}`))
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('I am working!')
})

app.listen(port, () => {
    console.log('mongoose-intro listening on port', port)
});