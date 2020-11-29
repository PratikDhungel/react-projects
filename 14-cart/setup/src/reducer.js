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

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false };
  }

  return state;
};

export default reducer;
