import DashBoardPage from "../Screens/Private/DashBoardPage";
import ProfilePage from "../Screens/Private/ProfilePage";
import LoginPage from "../Screens/Public/LoginPage";

export const routeTypes = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC"
};

export const Routes = [
  {
    type: routeTypes.PUBLIC,
    component: LoginPage,
    path: "/"
  },
  {
    type: routeTypes.PUBLIC,
    component: LoginPage,
    path: "/login"
  },
  {
    type: routeTypes.PRIVATE,
    component: DashBoardPage,
    path: "/users"
  },
  {
    type: routeTypes.PRIVATE,
    component: ProfilePage,
    path: "/users/:id"
  }
];
