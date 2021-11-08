import styled from "styled-components";
import IComponent from "../Interfaces/component";
import { Link } from "react-router-dom";
import Button from "../UILibrary/button";
import { useContext } from "react";
import UserContext from "../Context/user";

const Homescreen: React.FunctionComponent<IComponent> = (props) => {
  const user = useContext(UserContext);
  console.log(user.userState.user);
  if (!user.userState.user.token) {
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
  } else {
    return (
      <div>
        <StyledHome>
          <StyledHeader>Are you ready to try some beer?</StyledHeader>
        </StyledHome>
        <StyledHome>
          <Link to="/creategame">
            <Button>Create New Game</Button>
          </Link>
          <Link to="/playgame">
            <Button>Edit Game</Button>
          </Link>
          <Link to="/joingame">
            <Button>Join Game</Button>
          </Link>
        </StyledHome>
      </div>
    );
  }
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
