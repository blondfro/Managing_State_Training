export default function cartReducer(cart, action) {
  switch (action.type) {
    case "add": {
      const { id, sku } = action;
      const itemInCart = cart.find((item) => item.sku === sku);
      if (itemInCart) {
        // Return new array with the correct item replaced.
        return cart.map((item) =>
          item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Return new array with the new item added in.
        return [...cart, { id, sku, quantity: 1 }];
      }
    }
    case "updateQuantity": {
      // check if the quantity is 0, if yes, remove item, if not return new array.
      const { sku, quantity } = action;
      return quantity === 0
        ? cart.filter((item) => item.sku !== sku)
        : cart.map((item) => (item.sku === sku ? { ...item, quantity } : item));
    }
    case "empty":
      return [];
    default: {
      throw new Error("Unhandled action " + action.type);
      return cart;
    }
  }
}
