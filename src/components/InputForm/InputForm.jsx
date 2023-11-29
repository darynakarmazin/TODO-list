import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/operations';
import { BsSave } from 'react-icons/bs';
import { FormBtn, InputSearch, SearchFormStyled } from './InputForm.styled';

export const InputForm = () => {
  const dispatch = useDispatch();

  // Local state to store the value of the input query
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Creating a new task object
    const todo = {
      userId: 1,
      title: query,
      completed: false,
    };

    // Dispatching an action to add the task to the Redux store
    dispatch(addTodo(todo));
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <BsSave size="20px" />
      </FormBtn>

      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
