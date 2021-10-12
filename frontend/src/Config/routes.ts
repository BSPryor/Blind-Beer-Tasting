import Homescreen from "../Components/Homescreen";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import IRoute from "../Interfaces/route";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Screen",
    component: Homescreen,
    exact: true,
  },
  {
    path: "/signin",
    name: "Sign In",
    component: SignIn,
    exact: true,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: SignUp,
    exact: true,
  },
];

export default routes;
