import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import OtherPage from "../pages/otherPage";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/headline",
      element: <OtherPage />,
    },
    {
      path: "/top-stories",
      element: <OtherPage />,
    },
  ],
};

export default MainRoutes;
