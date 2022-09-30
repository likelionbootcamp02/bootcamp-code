import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import axios from "axios";

const CartItems = () => {
  const [carts, setCarts] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/carts/1`)
      .then(function (res) {
        console.log(res.data.products);
        setCarts(res.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    carts && (
      <div>
        {carts.map(function (item) {
          return (
            <CartItem
              key={item.id}
              cart={item}
              carts={carts}
              setCarts={setCarts}
            />
          );
        })}

        <p>
          Total Price:
          {carts.reduce(function (total, item) {
            return total + item.price * item.quantity;
          }, 0)}
        </p>
      </div>
    )
  );
};

export default CartItems;
