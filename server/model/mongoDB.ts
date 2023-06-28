import mongoose, { Schema, ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGO_URI;

const connectionOptions: ConnectOptions = {
  dbName: 'BPLT',
};

(async () => {
  try {
    await mongoose.connect(URI!, connectionOptions); // Using '!' after URI as we're sure it exists, but it's a good practice to check if it's not undefined before using.
    console.log('Connected to Mongo DB successfully!');
  } catch (err) {
    console.log('Error connecting to Mongo DB', err);
  }
})();

const sampleSchema = new Schema({
  description: { type: String, required: true },
});

const Sample = mongoose.model('Sample', sampleSchema);

export {
  Sample
};