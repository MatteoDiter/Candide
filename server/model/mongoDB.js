const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_URI;

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