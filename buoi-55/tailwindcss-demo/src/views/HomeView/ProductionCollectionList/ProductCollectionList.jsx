import { useEffect, useState } from "react";
import ProductCollection from "./ProductCollection";
import axios from "axios";

const categories = ["trainers", "shoes", "pants"];

const ProductCollectionList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {categories.map((category) => {
        const productsByCategory = products.filter(
          (product) => product.category === category
        );

        return (
          <ProductCollection
            key={category}
            category={category}
            products={productsByCategory}
          />
        );
      })}
    </>
  );
};

export default ProductCollectionList;
