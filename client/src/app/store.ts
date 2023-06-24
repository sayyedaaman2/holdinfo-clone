import {configureStore} from '@reduxjs/toolkit'
import ThemeSlice from '../features/theme/themeSlice'
import MarketSlice from '../features/market/marketSlice'
import CurrencySlice  from '../features/currency/currencySlice'
export const store = configureStore({
    reducer : {
        theme : ThemeSlice,
        market : MarketSlice,
        currency : CurrencySlice,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch