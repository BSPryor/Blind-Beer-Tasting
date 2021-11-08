import styled from "styled-components";

const AppContainer: React.FunctionComponent = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default AppContainer;

const StyledContainer = styled.div`
  padding-top: 8em;
`;
