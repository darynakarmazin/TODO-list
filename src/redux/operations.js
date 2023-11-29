import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set the default base URL for Axios requests
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
const path = '/todos';

// fetchTodos - Fetch an array of todos (GET method) using a paginated query.
export const fetchTodos = createAsyncThunk(
  'catalog/fetchTodos',
  async (page, thunkAPI) => {
    try {
      // Make a GET request to retrieve todos with pagination
      const res = await axios.get(`${path}?_page=${page}&_limit=8`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// addTodo - Add a new todo (POST method).
export const addTodo = createAsyncThunk(
  'catalog/addTodo',
  async (newTodo, thunkAPI) => {
    try {
      // Make a POST request to add a new todo
      const response = await axios.post(path, newTodo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// deleteTodo - Delete a todo (DELETE method).
export const deleteTodo = createAsyncThunk(
  'catalog/deleteTodo',
  async (id, thunkAPI) => {
    try {
      // Make a DELETE request to remove a todo by its id
      const response = await axios.delete(`${path}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
