import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import UserContext from "../Context/user";
import IComponent from "../Interfaces/component";
import Button from "../UILibrary/button";
import Input from "../UILibrary/input";

const SignUp: React.FunctionComponent<IComponent> = () => {
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

  const handleSignUpSubmit = (e: any) => {
    const user = {
      name: name,
      password: password,
    };
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/signup", user)
      .then(function (response: any) {
        context.userDispatch({
          type: "signup",
          payload: { user: response.data },
        });
      });
    history.push("/");
  };

  return (
    <SignUpStyled>
      <StyledForm>
        <StyledInputGroup className="form-group">
          <StyledLabel>Name</StyledLabel>
          <Input name="name" onChange={nameFieldInputHandler}></Input>
        </StyledInputGroup>
        <StyledInputGroup className="form-group">
          <StyledLabel>Password</StyledLabel>
          <Input name="password" onChange={passwordFieldInputHandler}></Input>
        </StyledInputGroup>
        <Button type="submit" onClick={handleSignUpSubmit}>
          Submit
        </Button>
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
  align-items: center;
`;

const StyledLabel = styled.label`
  font-size: 30px;
  margin: 0 1em;
`;
