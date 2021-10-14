import CreateGame from "../Components/CreateGame";
import Homescreen from "../Components/Homescreen";
import JoinGame from "../Components/JoinGame";
import PlayGame from "../Components/PlayGame";
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
  {
    path: "/creategame",
    name: "Create Game",
    component: CreateGame,
    exact: true,
  },
  {
    path: "/playgame",
    name: "Play Game",
    component: PlayGame,
    exact: true,
  },
  {
    path: "/joingame",
    name: "Join Game",
    component: JoinGame,
    exact: true,
  },
];

export default routes;
