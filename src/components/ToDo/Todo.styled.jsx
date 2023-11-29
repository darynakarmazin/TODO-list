import styled from 'styled-components';

export const TodoWrapper = styled.div`
  padding: 40px;
  background-color: #f2f2f2;
  border-radius: 8px;
  color: #9e9e9e;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
  position: relative;
  width: 100%;
  height: 100%;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const EditWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  -webkit-transition: -webkit-transform 0.25s
    cubic-bezier(0.7, 0.98, 0.86, 0.98);
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const EditButton = styled.button`
  padding: 10px;
  -webkit-transition: -webkit-transform 0.25s
    cubic-bezier(0.7, 0.98, 0.86, 0.98);
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const EditInput = styled.input`
  width: 90%;
  border-style: none;
  border-bottom: 1px solid darkgray;
  background-color: transparent;
`;

export const CompletedButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  -webkit-transition: -webkit-transform 0.25s
    cubic-bezier(0.7, 0.98, 0.86, 0.98);
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
