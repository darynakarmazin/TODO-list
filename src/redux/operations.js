import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
const path = '/todos';

// fetchToDos - одержання масиву todos (метод GET) запитом.
export const fetchToDos = createAsyncThunk(
  'catalog/fetchToDos',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`${path}?_page=${page}&_limit=8`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
