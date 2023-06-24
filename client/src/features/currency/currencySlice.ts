import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCurrecnyList } from './currencyAction'
import { CurrencyList, CurrencyState } from '../../types'

const initialState: CurrencyState = {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
}


export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        getData: (state, action: PayloadAction<CurrencyList>) => {
            state.data = action.payload;
        }

    },
    extraReducers(builder) {
        builder
            .addCase(fetchCurrecnyList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCurrecnyList.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = payload.data;
            })
            .addCase(fetchCurrecnyList.rejected, (state, { error }) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = error.message || 'An error occured'
            })
            
    },

})

export const {getData} = currencySlice.actions
export default currencySlice.reducer;