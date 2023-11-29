import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';
import { BiCircle, BiChevronDownCircle } from 'react-icons/bi';
import { Text } from '../Text/Text.styled';
import {
  DeleteButton,
  EditButton,
  TodoWrapper,
  EditWrapper,
  EditInput,
  CompletedButton,
} from './Todo.styled';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo, editTodo } from '../../redux/operations';
import { useState } from 'react';

export const Todo = ({ title, id, completed }) => {
  // State to determine if the editing mode is active
  const [isEdit, setIsEdit] = useState(false);
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    dispatch(editTodo({ activeId: id, updatedTodo: { title: query } }));
    setIsEdit(false);
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleCompleted = () => {
    dispatch(
      completeTodo({ activeId: id, updatedTodo: { completed: !completed } })
    );
  };

  return (
    <>
      <TodoWrapper>
        <EditWrapper>
          {!isEdit ? (
            <EditButton onClick={() => handleEdit()}>
              <AiOutlineEdit size={28} />
            </EditButton>
          ) : (
            <EditButton onClick={() => handleSave()}>
              <AiOutlineSave size={28} />
            </EditButton>
          )}
        </EditWrapper>

        <Text>TODO #</Text>
        <Text>
          {!isEdit ? (
            <>{title}</>
          ) : (
            <EditInput defaultValue={title} onChange={handleChange} />
          )}
        </Text>

        {completed ? (
          <CompletedButton type="button" onClick={handleCompleted}>
            <BiChevronDownCircle size={32} />
          </CompletedButton>
        ) : (
          <CompletedButton type="button" onClick={handleCompleted}>
            <BiCircle size={32} />
          </CompletedButton>
        )}

        {/* Button for deleting the task */}
        <DeleteButton type="button" onClick={() => handleDelete(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
