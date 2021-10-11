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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;
