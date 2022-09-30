const Counter = ({ cart, carts, setCarts }) => {
  // Update carts
  function updateCarts(id, increase = true) {
    const newCarts = carts.map((item) => {
      if (item.id === id) {
        if (increase) {
          return { ...item, quantity: cart.quantity + 1 };
        }
        return { ...item, quantity: cart.quantity - 1 };
      }
      return item;
    });

    setCarts(newCarts);
  }

  return (
    <div>
      <button onClick={() => updateCarts(cart.id, false)}>-</button>
      <span className="counter">{cart.quantity}</span>
      <button onClick={() => updateCarts(cart.id)}>+</button>
    </div>
  );
};

export default Counter;
