import App from "../App";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/notFound";
import RegisterPage from "../pages/register";
import RouteName from "./routeName";

const PageRoute = [
  {
    path: RouteName.home,
    element: <App />,
  },
  {
    path: RouteName.login,
    element: <LoginPage />,
  },
  {
    path: RouteName.register,
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default PageRoute;
