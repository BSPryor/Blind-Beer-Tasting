import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import UserContext from "../Context/user";
import IComponent from "../Interfaces/component";
import Button from "../UILibrary/button";
import Input from "../UILibrary/input";

const SignIn: React.FunctionComponent<IComponent> = () => {
  const history = useHistory();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const context = useContext(UserContext);

  const nameFieldInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const passwordFieldInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleSignInSubmit = (e: any) => {
    const user = {
      name: name,
      password: password,
    };
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/signin", user)
      .then(function (response: any) {
        context.userDispatch({
          type: "signin",
          payload: { user: response.data },
        });
      });
    history.push("/");
  };

  return (
    <SignInStyled>
      <StyledForm>
        <StyledInputGroup className="form-group">
          <StyledLabel>Name</StyledLabel>
          <Input name="name" onChange={nameFieldInputHandler} />
        </StyledInputGroup>
        <StyledInputGroup className="form-group">
          <StyledLabel>Password</StyledLabel>
          <Input name="password" onChange={passwordFieldInputHandler} />
        </StyledInputGroup>
        <Button type="submit" onClick={handleSignInSubmit}>
          Sign In
        </Button>
      </StyledForm>
    </SignInStyled>
  );
};

export default SignIn;

const SignInStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
`;

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 2em;
  padding: 0.5em;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-size: 30px;
  margin: 0 1em;
`;
