import mongoose, { Schema, ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// uri
const URI = process.env.MONGO_URI;

// connection options
const connectionOptions: ConnectOptions = {
  dbName: "BPLT",
};

// connection
mongoose
  .connect(URI!, connectionOptions)
  .then(() => {
    console.log("Connected to Mongo DB successfully!");
  })
  .catch((err) => {
    console.log("Error connecting to Mongo DB", err);
  });

// schemas
// sample schema
const sampleSchema = new Schema({
  description: { type: String, required: true },
});

const Sample = mongoose.model("Sample", sampleSchema);

// signup schema
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export { Sample, User };
