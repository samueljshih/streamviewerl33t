const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let mySchema = mongoose.Schema({
  id: String,
  name: String
});

let schema = mongoose.model('schema', mySchema);

module.exports.get = () => {
  console.log('GET!');
};
