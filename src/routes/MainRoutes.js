import MainLayout from "../layout/MainLayout";
import Detail from "../pages/detail";
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
    {
      path: "/:uuid",
      element: <Detail />,
    },
  ],
};

export default MainRoutes;
