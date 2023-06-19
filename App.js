import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import About from "./src/About";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./src/Contact";
import Error from "./src/Error";
import RestaurantMenu from "./src/RestaurantMenu";

/*

* Header
  - Logo
  - Nav Items
* Body
  - Search
  - RestaurantContainer
    - RestaurantCard
      - Image
      - Name of restaurant, Star Rating, Cuisines, Delivery time
* Footer
  - Copyright
  - Links
  - Address
  - Contact Information
*/

const AppLayout = () => {
  // virtual DOM
  console.log(<Body />);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // dynamic URL
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
