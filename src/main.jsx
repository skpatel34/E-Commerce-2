import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import Home from "./Home/Home.jsx";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./blog/Blog.jsx";
import Shop from "./shop/Shop.jsx";
import SingleProduct from "./shop/SingleProduct.jsx";
import CratPage from "./shop/CratPage.jsx";
import SingleBlog from "./blog/SingleBlog.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      { 
        path: "/blog", 
        element: <Blog /> 
      },
      { 
        path: "/blog/:id", 
        element: <SingleBlog /> 
      },
      { 
        path: "/shop", 
        element: <Shop /> 
      },
      {
        path: "shop/:id",
        element: <SingleProduct />
      },
      {
        path: "/cart-page",
        element: <CratPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }

    ],
  },
 
]);

createRoot(document.getElementById("root")).render(

     <RouterProvider router={router} /> 

);
