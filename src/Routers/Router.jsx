import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import App from "../Pages/App/App";
import Installation from "../Pages/Installation/Installation";
import SingleProduct from "../Component/singleproduct/SingleProduct";
import PageError from "../Component/error/PageError";
import ComponentError from "../Component/error/ComponentError";
import { FadeLoader } from "react-spinners";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <FadeLoader></FadeLoader>,
    children: [
      { index: true, Component: Home },
      { path: "/app", Component: App },
      { path: "/installation", Component: Installation },
      { path: "/sinpleProduct", Component: SingleProduct },
      { path: "/sinpleProduct/*", Component: ComponentError },
      { path: "*", Component: PageError },
    ],
  },
]);
