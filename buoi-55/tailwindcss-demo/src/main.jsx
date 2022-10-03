import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductCollectionList from "./views/HomeView/ProductionCollectionList/ProductCollectionList";
import ProductDetail from "./views/ProductDetailView/ProductDetail";
import HomeView from "./views/HomeView";
import ProductDetailView from "./views/ProductDetailView";
import CartView from "./views/CartView";
import CheckoutView from "./views/CheckoutView";
import ErrorView from "./views/ErrorView";
import ProductsView from "./views/ProductsView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorView />,
    children: [
      { index: true, element: <HomeView /> },
      { path: "/products", element: <ProductsView /> },
      { path: "/products/:productId", element: <ProductDetailView /> },
      { path: "/carts", element: <CartView /> },
      { path: "/checkout", element: <CheckoutView /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
