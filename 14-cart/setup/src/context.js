import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems);
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeItem = (item_id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item_id });
  };

  const increaseCount = (item_id) => {
    dispatch({ type: 'INCREASE_COUNT', payload: item_id });
  };

  const decreaseCount = (item_id) => {
    dispatch({ type: 'DECREASE_COUNT', payload: item_id });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart, removeItem, increaseCount, decreaseCount }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
