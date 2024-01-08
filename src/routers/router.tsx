import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import MainLayout from "../layout";

export const router = createBrowserRouter( 
  [
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/user",
          element: <About/>
        }
      ]
    }
]);