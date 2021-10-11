import styled from "styled-components";
import IComponent from "../Interfaces/component";

const Homescreen: React.FunctionComponent<IComponent> = (props) => {
  return (
    <StyledHome>
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </StyledHome>
  );
};

export default Homescreen;

const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2em;
  margin: auto;
`;

const Button = styled.button`
  background-color: #12a561;
  color: #2d3047;
`;
