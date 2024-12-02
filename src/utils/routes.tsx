import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import BasicLayout from "../layout/BasicLayout";
import AuthLayout from "../layout/AuthLayout";
import NoFoundPage from "../layout/BlankLayout";
import HomePage from "../pages/home";

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/user/",
    element: <BasicLayout />,
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
  },
  {
    path: "*",
    element: <NoFoundPage />,
  },
];

const rootRoute = createBrowserRouter(mainRoutes);

const Routes = () => {
  return <RouterProvider router={rootRoute} />;
};

export default Routes;
