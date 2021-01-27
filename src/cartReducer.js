export default function cartReducer(cart, action) {
  switch (action.type) {
    case "add":
      return [];
    case "update":
      return [];
    case "empty":
      return [];
    default: {
      throw new Error("Unhandled action " + action.type);
      return cart;
    }
  }
}
