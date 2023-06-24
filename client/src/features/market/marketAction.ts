import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:8080';


export const fetchMarketList = createAsyncThunk(
  "market/getdata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/market/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

