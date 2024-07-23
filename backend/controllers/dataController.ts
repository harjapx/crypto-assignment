import { Request, Response } from 'express';
import { PriceData } from '../models/PriceData';

export const getData = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const data = await PriceData.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
