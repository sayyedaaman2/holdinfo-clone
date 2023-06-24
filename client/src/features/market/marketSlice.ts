import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchMarketList } from "./marketAction";
import {MarketItem, MarketState} from '../../types'
import { fetchByIdCurrecny } from "../currency/currencyAction";

const initialState:MarketState = {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
}

export const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        getData: (state, action:PayloadAction<MarketItem[] | MarketItem>) => {
            state.data = action.payload;
        }

    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchMarketList.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(fetchMarketList.fulfilled, (state,{payload})=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.data = payload.data;
        })
        .addCase(fetchMarketList.rejected, (state, {error})=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = error.message || 'An error occurred';
        })
        .addCase(fetchByIdCurrecny.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(fetchByIdCurrecny.fulfilled, (state,{payload})=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.data = payload.data;
        })
        .addCase(fetchByIdCurrecny.rejected, (state, {error})=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = error.message || 'An error occurred';
        })
       
    },
})

export const {getData} = marketSlice.actions
export default marketSlice.reducer;