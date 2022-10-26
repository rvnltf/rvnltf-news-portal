import MinimalLayout from "../layout/MinimalLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AuthenticationRoutes = {
  path: "/auth",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ],
};

export default AuthenticationRoutes;
