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
  }

  return state;
};

export default reducer;
