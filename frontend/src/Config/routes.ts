import Homescreen from "../Components/Homescreen";
import IRoute from "../Interfaces/route";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Screen",
    component: Homescreen,
    exact: true,
  },
];

export default routes;
