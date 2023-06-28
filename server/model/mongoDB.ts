import mongoose, { Schema, ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGO_URI;

const connectionOptions: ConnectOptions = {
  dbName: 'BPLT',
};

mongoose.connect(URI!, connectionOptions)
  .then(() => {
    console.log('Connected to Mongo DB successfully!');
  })
  .catch((err) => {
    console.log('Error connecting to Mongo DB', err);
  });

const sampleSchema = new Schema({
  description: { type: String, required: true },
});

const Sample = mongoose.model('Sample', sampleSchema);

export default Sample