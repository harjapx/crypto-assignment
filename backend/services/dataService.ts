import { fetchCryptoPrice } from './cryptoService'; // Import CoinGecko fetching function
// import { fetchStockPrice } from './stockService'; // Import stock fetching function
import { PriceData } from '../models/PriceData';

export const fetchDataAndSave = async (symbol: string, type: 'stocks' | 'crypto') => {
  try {
    let priceData;

    // if (type === 'crypto') {
      const cryptoData = await fetchCryptoPrice([symbol]);
      priceData = cryptoData[symbol]?.usd; // Adjust based on API response structure
    // } else if (type === 'stocks') {
    //   const stockData = await fetchStockPrice(symbol);
    //   const latestData = stockData['Time Series (1min)'];
    //   const latestTime = Object.keys(latestData)[0];
    //   priceData = latestData[latestTime]?.['1. open'];
    // }

    if (priceData) {
      const newData = new PriceData({ symbol, price: parseFloat(priceData) });
      await newData.save();
    }
  } catch (error) {
    console.error(`Error fetching data for ${symbol}: `, error);
  }
};
