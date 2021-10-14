import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  RouteComponentProps,
  Switch,
  Route,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AppContainer from "./Components/AppContainer";
import Navbar from "./Components/Navbar";
import routes from "./Config/routes";
import UserContext, {
  initialUserState,
  UserContextProvider,
  userReducer,
} from "./Context/user";

import * as dotenv from "dotenv";

dotenv.config({ path: "../" });

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #437f97;
    color: #12A561;
  }
`;

const App: React.FunctionComponent<{}> = () => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  const userContextValues = {
    userState,
    userDispatch,
  };

  return (
    <BrowserRouter>
      <UserContextProvider value={userContextValues}>
        <GlobalStyle />
        <div>
          <Navbar name="Navbar" />
        </div>
        <AppContainer>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              );
            })}
          </Switch>
        </AppContainer>
      </UserContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
