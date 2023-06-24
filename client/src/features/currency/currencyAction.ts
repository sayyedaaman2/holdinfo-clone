import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { SelectState } from '../../types';
const baseUrl = 'http://localhost:8080';

export const fetchCurrecnyList = createAsyncThunk(
    "market/currencylist",
    async (_, { rejectWithValue }) => {
        try {

            const response = await axios.get(`${baseUrl}/api/v1/market/currencylist`)
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const fetchByIdCurrecny = createAsyncThunk(
    "market/currency",
    async (data:SelectState, { rejectWithValue }) => {
        try {
            const currencyId  = data.base_unit + data.quote_unit ;
            console.log(currencyId);
            const response = await axios.get(`${baseUrl}/api/v1/market/currency/${currencyId}`)
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)