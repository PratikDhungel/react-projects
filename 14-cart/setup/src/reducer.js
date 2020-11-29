const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE_ITEM') {
    console.log('Remove Item invoked');
    const newCartItems = state.cart.filter((cartItem) => cartItem.id !== action.payload);
    return { ...state, cart: newCartItems };
  }
  return state;
};

export default reducer;
