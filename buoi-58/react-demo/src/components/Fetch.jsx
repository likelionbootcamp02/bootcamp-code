import axios from "axios";
import { useEffect, useState } from "react";

const Fetch = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["all"]);
  const [category, setCategory] = useState("all");

  const [data, setData] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => setCategories([...categories, ...res.data]))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const apiUrl = "http://localhost:3000/products";
    axios
      .get(apiUrl)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/products", data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  function handleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            Id:
            <input onChange={handleInput} type="text" name="id" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Title:
            <input onChange={handleInput} type="text" name="title" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Description:
            <input onChange={handleInput} type="text" name="description" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Price:
            <input onChange={handleInput} type="text" name="price" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Category:
            <input onChange={handleInput} type="text" name="category" />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>

      {/* Select */}
      <select onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>

      {/* Products */}
      {products
        .filter((product) => {
          return product.category === category || category === "all";
        })
        .map((product) => {
          return (
            <div key={product.id}>
              <p>Title: {product.title}</p>
              <p>Desc: {product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default Fetch;
