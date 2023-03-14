import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Home from "./components/Home";
import Header from "./components/Header";

const router = createBrowserRouter([
  { path: "/base", element: <Base /> },
  {
    path: "/toppings",
    element: <Toppings />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}

export default App;
