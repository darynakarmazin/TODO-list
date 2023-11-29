import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';
import { Text } from '../Text/Text.styled';
import {
  DeleteButton,
  EditButton,
  TodoWrapper,
  EditWrapper,
  EditInput,
} from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/operations';
import { useState } from 'react';

export const Todo = ({ title, id }) => {
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
            <>{title}</>
          ) : (
            <EditInput defaultValue={title} onChange={handleChange} />
          )}
        </Text>

        {/* Button for deleting the task */}
        <DeleteButton type="button" onClick={() => handleDelete(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
