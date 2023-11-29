import { Container } from '../Container/Container.styled';
import Header from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm';
import ToDoList from '../ToDoList/ToDoList';

function App() {
  return (
    <>
      <Header />
      <Container>
        <SearchForm />
        <ToDoList />
      </Container>
    </>
  );
}

export default App;
