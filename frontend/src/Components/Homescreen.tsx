import styled from "styled-components";
import IComponent from "../Interfaces/component";
import { Link } from "react-router-dom";
import Button from "../UILibrary/button";

const Homescreen: React.FunctionComponent<IComponent> = (props) => {
  return (
    <div>
      <StyledHome>
        <StyledHeader>Are you ready to try some beer?</StyledHeader>
      </StyledHome>
      <StyledHome>
        <Link to="/signin">
          <Button>Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </StyledHome>
    </div>
  );
};

export default Homescreen;

const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 2em;
  margin: auto;
`;

const StyledHeader = styled.h1`
  display: block;
`;
