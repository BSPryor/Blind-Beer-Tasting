import styled from "styled-components";
import IComponent from "../Interfaces/component";

const Homescreen: React.FunctionComponent<IComponent> = (props) => {
  return (
    <StyledHome>
      <p>Welcome to the game</p>
    </StyledHome>
  );
};

export default Homescreen;

const StyledHome = styled.div`
  padding-top: 100px;
`;
