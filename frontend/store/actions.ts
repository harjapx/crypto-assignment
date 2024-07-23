import axios from 'axios';
import { Dispatch } from 'redux';
import { AppState } from './types';

export const FETCH_DATA = 'FETCH_DATA';
export const SELECT_STOCK = 'SELECT_STOCK';

interface FetchDataAction {
  type: typeof FETCH_DATA;
  payload: AppState['data'];
}

interface SelectStockAction {
  type: typeof SELECT_STOCK;
  payload: string;
}

type AppActionTypes = FetchDataAction | SelectStockAction;

export const fetchData = (symbol: string) => async (dispatch: Dispatch<AppActionTypes>) => {
  try {
    const res = await axios.get(`/api/data/${symbol}`);
    dispatch({ type: FETCH_DATA, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const selectStock = (symbol: string): AppActionTypes => {
  return { type: SELECT_STOCK, payload: symbol };
};
