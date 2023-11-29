import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchTodos } from './operations';

// Handlers for pending and rejected actions
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
    // Handling async actions using extraReducers
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
      .addCase(deleteTodo.rejected, handleRejected)
      .addCase(deleteTodo.pending, handlePending)
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.todos.findIndex(todo => todo.id === action.payload);
        state.todos.splice(index, 1);
      })
      .addCase(addTodo.rejected, handleRejected);
  },
  // Reducers for synchronous actions
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
