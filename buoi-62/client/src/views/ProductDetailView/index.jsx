import { useParams } from "react-router-dom";

const ProductDetailView = () => {
  const { productId } = useParams();
  return <div>Product {productId}</div>;
};

export default ProductDetailView;
