const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/movies', { useNewUrlParser: true });
const app = express()

const port = process.env.PORT || 3001

const db = mongoose.connection;
const Movie = require('./models/movie')
const BlogPost = require('./models/blogpost')
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
});
db.on('error', err => console.log(`Database error: \n ${err}`))
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('I am working!')
})

// Movie.create({
//     title: 'Harry Potter',
//     releaseYear: 2001
// }), (err, doc) => {
//     console.log(err, doc)
// }

// Movie.create({
//     title: 'Star Wars',
//     releaseYear: 1970
// }), (err, doc) => {
//     console.log(err, doc)
// }

// Movie.find()

// Movie.find({}).where('releaseYear').lt(1990).exec((err,doc) => {
//     console.log(doc)
// })

const post = new BlogPost({ title: 'Cat', body: 'Yeehaw! Farge!' })

post.comments.push({ title: 'What?', content: 'A comment!', date: new Date() })

post.save((err, doc) => {
    if (!err) {
        console.log('Success!', doc )
    } else {
        console.log(err);
    }
})

// Adding embedded subdocs to a document

app.listen(port, () => {
    console.log('mongoose-intro listening on port', port)
});