import { createSlice } from '@reduxjs/toolkit';
import { setToDos } from './operations';

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
      .addCase(setToDos.pending, handlePending)
      .addCase(setToDos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.todos = [...state.todos, ...action.payload];
        state.todos = [...action.payload];
      })
      .addCase(setToDos.rejected, handleRejected);
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
