import styled from "styled-components";
import IComponent from "../Interfaces/component";

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
