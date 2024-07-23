import express from 'express';
import mongoose from 'mongoose';
import { fetchDataAndSave } from './services/dataService';
import dotenv from 'dotenv';
import { PriceData } from './models/PriceData';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/stockCryptoDB';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Route to fetch and save cryptocurrency data for multiple symbols
app.post('/fetch-crypto', async (req, res) => {
  const { symbols } = req.body;

  if (!Array.isArray(symbols) || symbols.length === 0) {
    return res.status(400).json({ error: 'Symbols array is required and must not be empty' });
  }

  try {
    const results = await Promise.all(symbols.map(async (symbol: string) => {
      await fetchDataAndSave(symbol, 'crypto');
      const latestData = await PriceData.findOne({ symbol }).sort({ _id: -1 }).exec();
      return {
        symbol,
        price: latestData ? latestData.price : null,
      };
    }));

    res.status(200).json({
      message: `Data for ${symbols.join(', ')} has been fetched and saved.`,
      data: results,
    });
  } catch (error: any) {
    res.status(500).json({ error: `Error fetching data: ${error.message}` });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
