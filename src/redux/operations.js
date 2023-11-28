import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const setToDos = createAsyncThunk(
  'catalog/fetchToDos',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`/todos?_page=${page}&_limit=20`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
