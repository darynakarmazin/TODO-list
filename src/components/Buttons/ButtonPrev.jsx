import { Button } from './Buttons.styled';

function ButtonPrev({ onFindPrev }) {
  return (
    <Button onClick={onFindPrev} type="button">
      Prev
    </Button>
  );
}

export default ButtonPrev;
