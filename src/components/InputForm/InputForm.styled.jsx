import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: 80px;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 56px;
  border-style: none;
  border-bottom: 1px solid #212121;
  background-color: transparent;
  padding: 16px;
  padding-right: 40px;
  outline: none;
  -webkit-transition: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  transition: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  font-size: 18px;
  color: #212121;
  font-weight: 300;
  letter-spacing: 0.03em;

  &::placeholder {
    font-weight: 200;
  }
`;

export const FormBtn = styled.button`
  width: 50px;
  height: 56px;
  font-size: 20px;
  font-weight: bold;
  color: #212121;
  position: absolute;
  top: 0;
  right: 0;
`;
