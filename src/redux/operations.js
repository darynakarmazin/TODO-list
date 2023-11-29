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
  async (removeId, thunkAPI) => {
    try {
      // Make a DELETE request to remove a todo by its id
      await axios.delete(`${path}/${removeId}`);
      return removeId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// editTodo - Edit a todo (PATCH method).
export const editTodo = createAsyncThunk(
  'catalog/editTodo',
  async ({ activeId, updatedTodo }, thunkAPI) => {
    try {
      // Make a PATCH request to edit an existing todo
      await axios.patch(`${path}/${activeId}`, updatedTodo);
      return { activeId, updatedTodo };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// completeTodo - Edit a todo (PATCH method).
export const completeTodo = createAsyncThunk(
  'catalog/completeTodo',
  async ({ activeId, updatedTodo }, thunkAPI) => {
    try {
      // Make a PATCH request to edit an existing todo
      await axios.patch(`${path}/${activeId}`, updatedTodo);
      return { activeId, updatedTodo };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
