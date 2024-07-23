import { AppState } from './types';
import { FETCH_DATA, SELECT_STOCK } from './actions';

const initialState: AppState = {
  data: [],
  selectedStock: 'GOOG'
};

const rootReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload
      };
    case SELECT_STOCK:
      return {
        ...state,
        selectedStock: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
