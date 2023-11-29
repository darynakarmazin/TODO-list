import { createSlice } from '@reduxjs/toolkit';
import { addTodo, fetchTodos } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
    page: 1,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, handlePending)
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.todos = [...action.payload];
      })
      .addCase(fetchTodos.rejected, handleRejected)
      .addCase(addTodo.pending, handlePending)
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, handleRejected);
  },
  reducers: {
    onNextPage: state => {
      state.page = state.page + 1;
    },
    onPrevPage: state => {
      state.page = state.page - 1;
    },
  },
});

export const { onNextPage, onPrevPage } = catalogSlice.actions;
export default catalogSlice.reducer;
