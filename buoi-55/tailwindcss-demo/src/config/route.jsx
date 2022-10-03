import { createBrowserRouter } from "react-router-dom";

// Layout
import DefaultLayout from "../layouts/DefaultLayout";

// Views
import HomeView from "../views/HomeView";
import ProductDetailView from "../views/ProductDetailView";
import CartView from "../views/CartView";
import CheckoutView from "../views/CheckoutView";
import ErrorView from "../views/ErrorView";
import ProductsView from "../views/ProductsView";

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

export default router;
