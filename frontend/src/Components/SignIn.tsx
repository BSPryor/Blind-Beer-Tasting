import styled from "styled-components";
import IComponent from "../Interfaces/component";
import Button from "../UILibrary/button";

const SignIn: React.FunctionComponent<IComponent> = () => {
  const handleSignUpSubmit = () => {};

  return (
    <SignInStyled>
      <StyledForm onSubmit={handleSignUpSubmit}>
        <StyledInputGroup className="form-group">
          <StyledLabel>Name</StyledLabel>
          <input name="name"></input>
        </StyledInputGroup>
        <StyledInputGroup className="form-group">
          <StyledLabel>Password</StyledLabel>
          <input name="password"></input>
        </StyledInputGroup>
        <Button type="submit">Sign In</Button>
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
