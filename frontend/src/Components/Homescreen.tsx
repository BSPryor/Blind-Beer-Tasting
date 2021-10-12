import styled from "styled-components";
import IComponent from "../Interfaces/component";
import { Link } from "react-router-dom";

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
  justify-content: space-around;
  padding: 2em;
  margin: auto;
`;

const StyledHeader = styled.h1`
  display: block;
`;

const Button = styled.button`
  display: inline-block;
  font-size: 24px;
  padding: 15px 25px;
  background-color: #12a561;
  color: #2d3047;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:active {
    transform: translateY(4px);
  }
`;
