import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {ThemeState} from '../../types'


const initialState: ThemeState = {
    value : "",
    darkMode : false,
}

export const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers : {
        setTheme: (state, action:PayloadAction<string>)=>{
            state.value = action.payload
            state.darkMode = !state.darkMode
        }
    }
})

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;