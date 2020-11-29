const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newCartItems = state.cart.filter((cartItem) => cartItem.id !== action.payload);
    return { ...state, cart: newCartItems };
  }

  if (action.type === 'INCREASE_COUNT') {
    const newCartItems = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: newCartItems };
  }

  if (action.type === 'DECREASE_COUNT') {
    const newCartItems = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          if (cartItem.amount < 1) {
            return {};
          }
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount > 0);
    return { ...state, cart: newCartItems };
  }

  return state;
};

export default reducer;
