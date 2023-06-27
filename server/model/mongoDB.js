const mongoose = require('mongoose');
require('dotenv').config();

// uri // wJ03hFouFpJ2XYkC
const myURI = 'mongodb+srv://matteo:wJ03hFouFpJ2XYkC@cluster0.m4uc462.mongodb.net/?retryWrites=true&w=majority';
const URI = process.env.MONGO_URI || myURI;

// schema
const Schema = mongoose.Schema;

// mongoose connection
mongoose
  .connect(URI, {
    useNewUrlParser: true, // use new parser
    useUnifiedTopology: true, // use better topology layer, improves performance
    dbName: 'BPLT',
  })
  .then(() => console.log('Connected to Mongo DB successfully!'))
  .catch((err) => console.log('Error connecting to Mongo DB', err));

// schemas 
const sampleSchema = new Schema({
  description: { type: String, required: true },
});

const Sample = mongoose.model('Sample', sampleSchema);

// export
module.exports = {
  Sample,
};