import { Button } from "./Buttons.styled";

function ButtonNext({ onFindMore }) {
  return (
    <Button onClick={onFindMore} type="button">
      Next
    </Button>
  );
}

export default ButtonNext;
