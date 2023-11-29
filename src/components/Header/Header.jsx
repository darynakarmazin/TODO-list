import { HeaderTag, HeaderWrapper } from './Header.styled';
import { Container } from '../Container/Container.styled';
import { FiCheckCircle } from 'react-icons/fi';

function Header() {
  return (
    <HeaderTag>
      <Container>
        <HeaderWrapper>
          <FiCheckCircle size="28px" />
          TODO List
        </HeaderWrapper>
      </Container>
    </HeaderTag>
  );
}

export default Header;
