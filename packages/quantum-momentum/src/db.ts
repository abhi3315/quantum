import mongoose from 'mongoose';
import config from '../config.json';

// Connect to MongoDB.
const mongoDbUri =
  process.env.MONGODB_URI || config.MONGODB_URI || 'mongodb://localhost:27017/quantum';
(async () => {
  try {
    await mongoose.connect(mongoDbUri);
    console.log('Connected to MongoDB.');
  } catch (e) {
    console.error('Unable to connect to MongoDB');
  }
})();
