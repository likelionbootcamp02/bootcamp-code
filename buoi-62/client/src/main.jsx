import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Views
import HomeView from "./views/HomeView";
import ProductDetailView from "./views/ProductDetailView";
import ProductsView from "./views/ProductsView";

// Tailwindcss base
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/products",
    element: <ProductsView />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetailView />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
