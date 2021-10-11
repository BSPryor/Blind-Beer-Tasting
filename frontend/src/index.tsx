import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  RouteComponentProps,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import routes from "./Config/routes";

const App: React.FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar name="Navbar" />
      </div>
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
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
