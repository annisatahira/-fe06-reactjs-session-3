import { useRoutes } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import AboutBook from "./components/AboutBook";
import AboutName from "./components/AboutName";
import Home from "./components/Home";

const AppRouter = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
      children: [
        { path: "name", element: <AboutName /> },
        { path: "book", element: <AboutBook /> },
      ],
    },
  ]);

  return element;
};

export default AppRouter;
