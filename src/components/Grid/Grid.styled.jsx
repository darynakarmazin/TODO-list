import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-bottom: 40px;
`;

export const ListItem = styled.li`
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
