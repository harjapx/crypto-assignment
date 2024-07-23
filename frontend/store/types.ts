export interface PriceData {
    symbol: string;
    price: number;
    timestamp: Date;
  }
  
  export interface AppState {
    data: PriceData[];
    selectedStock: string;
  }
  