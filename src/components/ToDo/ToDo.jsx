import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from '../Text/Text.styled';
import {
  DeleteButton,
  EditButton,
  TodoWrapper,
  EditWrapper,
  EditInput,
} from './Todo.styled';
import { useDispatch } from 'react-redux';
// import { deleteTodo, editToDo } from 'redux/toDosSlice';
import { deleteTodo } from '../../redux/operations';
import { AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';
import { useState } from 'react';

export const Todo = ({ text, id }) => {
  const [isEdit, setIsedit] = useState(false);
  // const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    setIsedit(true);
  };

  const handleSave = () => {
    // dispatch(editToDo({ activeId: id, query }));
    setIsedit(false);
  };

  const handleChange = e => {
    // setQuery(e.target.value);
  };

  return (
    <>
      <TodoWrapper>
        <EditWrapper>
          {!isEdit ? (
            <EditButton onClick={() => handleEdit()}>
              <AiOutlineEdit size={24} />
            </EditButton>
          ) : (
            <EditButton onClick={() => handleSave()}>
              <AiOutlineSave size={24} />
            </EditButton>
          )}
        </EditWrapper>
        <Text>TODO #</Text>
        <Text>
          {!isEdit ? (
            <>{text}</>
          ) : (
            <EditInput defaultValue={text} onChange={handleChange} />
          )}
        </Text>
        <DeleteButton type="button" onClick={() => handleDelete(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
