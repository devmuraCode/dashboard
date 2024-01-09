import About from "./components/About";
import { useRoutes } from "react-router-dom";
import MainLayout from "./layout/layout";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/login",
      element: <MainLayout />,
    },
  ]);

  return element;
};

export default App;
