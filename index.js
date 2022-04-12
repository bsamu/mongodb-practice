const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

// const Cat = mongoose.model('Cat', { name: String });
const Dog = mongoose.model('Dog', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
const puppy = new Dog({ name: 'Zilgamesh' })
// kitty.save().then(() => console.log('meow'));
puppy.save().then(() => console.log('vau'));