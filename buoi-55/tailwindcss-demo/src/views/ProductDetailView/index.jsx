import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductDetailReview from "./ProductDetailReview";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetailView = () => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, [productId]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/reviews")
      .then((res) => {
        const _reviews = res.data.filter((review) => {
          return review.productId == productId;
        });
        setReviews(_reviews);
      })
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <div>
      <ProductDetail product={product} />
      <ProductDetailReview reviews={reviews} />
    </div>
  );
};

export default ProductDetailView;
