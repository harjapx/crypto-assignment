import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';

export const fetchCryptoPrice = async (ids: string[], vs_currency: string = 'usd') => {
  try {
    const response = await axios.get(COINGECKO_API_URL, {
      params: {
        ids: ids.join(','),
        vs_currencies: vs_currency
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    throw error;
  }
};
