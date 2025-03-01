import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound"; // Optional 404 Page
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
