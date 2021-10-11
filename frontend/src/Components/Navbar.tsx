import React from "react";
import IComponent from "../Interfaces/component";
import { NavLink, Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FunctionComponent<IComponent> = (props) => {
  const renderLinks = () => {
    if (authenticated) {
      return (
        <React.Fragment>
          <Link to="/">
            <li>Watch List: {watchListCount}</li>
          </Link>
          <li>{email}</li>
          <li>
            <LinkButton href="#" onClick={handleSignOutClick}>
              Sign Out
            </LinkButton>
          </li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </React.Fragment>
      );
    }
  };

  return (
    <NavContainer>
      <NavLink to="/">Blind Beer Taste Test</NavLink>
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
  width: 100%
  height: auto;
  padding: 1.5em;
  a {
    color: #e0b700;
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
`;
