import React from "react";
import IComponent from "../Interfaces/component";
import { NavLink, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { BeerOutline } from "react-ionicons";

const Navbar: React.FunctionComponent<IComponent> = (props) => {
  const renderLinks = () => {
    // if (authenticated) {
    //   return (
    //     <React.Fragment>
    //       <Link to="/">
    //         <li>Watch List: {watchListCount}</li>
    //       </Link>
    //       <li>{email}</li>
    //       <li>
    //         <LinkButton href="#" onClick={handleSignOutClick}>
    //           Sign Out
    //         </LinkButton>
    //       </li>
    //     </React.Fragment>
    //   );
    // } else {
    return (
      <React.Fragment>
        <FirstNavli>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </FirstNavli>
        <Navli>
          <StyledLink to="/signin">Sign In</StyledLink>
        </Navli>
      </React.Fragment>
    );
    // }
  };

  return (
    <NavContainer>
      <StyledLogo>
        <NavLink to="/">
          <BeerOutline color="#e0b700" height="50px" width="50px" />
        </NavLink>
      </StyledLogo>

      <NavUl>{renderLinks()}</NavUl>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  position: fixed;
  z-index: 999;
  background: #2d3047;
  color: #e0b700;
  margin: 0;
  width: 96%;
  height: auto;
  padding: 1.5em;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  list-style: none;
`;

const StyledLogo = styled.div`
  postion: relative;
  float: left;
  width: 150px;
  height: auto;
`;

const FirstNavli = styled.li`
  float: left;
  margin-left: 0.8em;
  padding: 0.5em;
`;

const Navli = styled.li`
  margin-left: 0.8em;
  padding: 0.5em;
`;

const StyledLink = styled(Link)`
  color: #e0b700;
`;
