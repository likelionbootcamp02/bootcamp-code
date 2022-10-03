import React, { useEffect, useState } from "react";
import ProductFilter from "./ProductFilter";
import axios from "axios";

const ProductsView = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ProductFilter products={products} />
    </div>
  );
};

export default ProductsView;
