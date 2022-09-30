import Counter from "./Counter";

const CartItem = (props) => {
  return (
    <div>
      <Counter {...props} />
      <p>Price: {props.cart.price * props.cart.quantity}</p>
    </div>
  );
};

export default CartItem;
