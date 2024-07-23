import mongoose from 'mongoose';
import { config } from './config';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};
