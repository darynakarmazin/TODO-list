import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;

  color: #5e5e5e;
  font-size: 18px;
`;

export const Button = styled.button`
  background-color: #f2f2f2;
  border-radius: 8px;
  color: #5e5e5e;
  font-size: 20px;
  font-weight: 500;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
  padding: 10px 20px;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
