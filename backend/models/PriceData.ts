import mongoose from 'mongoose';

const PriceDataSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const PriceData = mongoose.model('PriceData', PriceDataSchema);
