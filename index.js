// const mongoose = require('mongoose');
// const express = require('express')
// const cors = require('cors')


// const app = express()
// const port = 3000
// mongoose.connect('mongodb://localhost:27017/test');

// app.use(cors());
// app.use(express.json());

// const Dogs = mongoose.model('Dogs', { name: String });

// app.post('/api/dog', (req, res) => {
//     const puppy = new Dogs({ name: req.body.name });
//     puppy.save().then(() => res.send('created'));
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
mongoose.connect('mongodb://localhost:27017/test');

app.use(cors());
app.use(express.json());

const Cat = mongoose.model('Cat', { name: String })

app.post('/api/dog', (req, res) => {
    const puppy = new Cat({ name: req.body.name });
    puppy.save().then(() => res.send('created'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})