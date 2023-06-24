
export interface Circle {
  off: {
    cx: number;
    cy: number;
    r: number;
  };
  on: {
    cx: number;
    cy: number;
    r: number;
  };
}

export interface ThemeState {
  value: string;
  darkMode : boolean;
}

export type MarketItem = {
  id: string;
  base_unit: string;
  quote_unit: string;
  low: string;
  high: string;
  last: string;
  type: string;
  open: string;
  volume: string;
  sell: string;
  buy: string;
  at: string;
  name: string;

}

export type Region = {
  quote_unit: string;
}
export type Crypto = {
  base_unit: string;
}

interface CurrencyList {
  region: Region[];
  crypto: Crypto[];
}

export interface CurrencyState {
  data : CurrencyList | null;
  isLoading : boolean;
  isSuccess : boolean;
  errorMessage : string | null;
}


export interface MarketState {
  data: MarketItem[] | MarketItem | null;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string | null;
}
export interface CryptoItemsProps {
  item: MarketItem | null;
  index: number;
} 

export interface SelectState {
  quote_unit : string;
  base_unit : string;
}
export interface Difference {
  difference: number ;
  percentageDifference: number | undefined;
}