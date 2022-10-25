import MainLayout from "../layout/MainLayout";
import Detail from "../pages/detail";
import Home from "../pages/home";
import NewsList from "../pages/newsList";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <NewsList />,
    },
    {
      path: "/:uuid",
      element: <Detail />,
    },
  ],
};

export default MainRoutes;
