import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectToDos } from '../../redux/selectors';
import { fetchTodos } from '../../redux/operations';
import { onNextPage, onPrevPage } from '../../redux/slice';
import { List, ListItem } from '../Grid/Grid.styled';
import { Todo } from '../ToDo/ToDo';
import ButtonPrev from '../Buttons/ButtonPrev';
import ButtonNext from '../Buttons/ButtonLoad';
import { ButtonWrapper } from '../Buttons/Buttons.styled';

function ToDoList() {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const todos = useSelector(selectToDos);
  const totalPage = 25; // Total number of pages

  useEffect(() => {
    dispatch(fetchTodos(page));
  }, [dispatch, page]);

  const onFindMore = () => {
    if (page < totalPage) {
      dispatch(onNextPage());
    }
  };

  // Handler for loading todos from the previous page
  const onFindPrev = () => {
    if (page > 1) {
      dispatch(onPrevPage());
    }
  };

  return (
    <div>
      <List>
        {todos.length > 0 &&
          todos.map(({ id, title, completed }) => (
            <ListItem key={id}>
              <Todo id={id} title={title} completed={completed} />
            </ListItem>
          ))}
      </List>

      {/* Buttons for navigating between pages */}
      <ButtonWrapper>
        <ButtonPrev onFindPrev={onFindPrev} />
        <span>{`${page} / ${totalPage}`}</span>
        <ButtonNext onFindMore={onFindMore} />
      </ButtonWrapper>
    </div>
  );
}

export default ToDoList;
