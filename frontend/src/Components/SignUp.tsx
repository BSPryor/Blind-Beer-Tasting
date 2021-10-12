import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import IComponent from "../Interfaces/component";

const SignUp: React.FunctionComponent<IComponent> = () => {
  const history = useHistory();

  const handleSignUpSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <SignUpStyled>
      <StyledForm onSubmit={handleSignUpSubmit}>
        <StyledInputGroup className="form-group">
          <StyledLabel>Name</StyledLabel>
          <input name="name"></input>
        </StyledInputGroup>
        <StyledInputGroup className="form-group">
          <StyledLabel>Password</StyledLabel>
          <input name="password"></input>
        </StyledInputGroup>
        <Button type="submit">Submit</Button>
      </StyledForm>
    </SignUpStyled>
  );
};

export default SignUp;

const SignUpStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 2em;
  padding: 0.5em;
`;

const StyledLabel = styled.label`
  margin: 0 1em;
`;

const Button = styled.button`
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
