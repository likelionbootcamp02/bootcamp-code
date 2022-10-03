// Get products
// Get product by id
import axios from "axios";

export function getProducts() {
  axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
