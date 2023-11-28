import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectPage,
  selectToDos,
} from '../../redux/selectors';
import { setToDos } from '../../redux/operations';
import { onNextPage, onPrevPage } from '../../redux/slice';
import ButtonNext from '../ButtonLoad/ButtonLoad';
import ButtonPrev from '../ButtonPrev/ButtonPrev';

function ToDoList() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const todos = useSelector(selectToDos);
  const totalPage = 10;

  useEffect(() => {
    dispatch(setToDos(page));
  }, [dispatch, page]);

  const onFindMore = () => {
    if (page < totalPage) {
      dispatch(onNextPage());
    }
  };

  const onFindPrev = () => {
    if (page > 1) {
      dispatch(onPrevPage());
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>завантаження.....</p>
      ) : (
        <>
          {todos && (
            <>
              {todos.length > 0 ? (
                <ul>
                  {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                  ))}
                </ul>
              ) : (
                <>{!isLoading && <p>Sorry, no matching adverts found</p>}</>
              )}
            </>
          )}
        </>
      )}

      <ButtonPrev onFindPrev={onFindPrev} />
      <span>{`${page} / ${totalPage}`}</span>
      <ButtonNext onFindMore={onFindMore} />
    </div>
  );
}

export default ToDoList;
