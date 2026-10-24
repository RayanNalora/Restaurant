import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About";


import { Layout } from "./pages/Layout";
import { Shop } from "./pages/Shop";
import { CartProvider } from "./components/CartContext/CartContext";
import Cart from "./pages/Cart/Cart";
import { Contact } from "./pages/Contact";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={Routing} />
    </CartProvider>
  );
}

export default App;
