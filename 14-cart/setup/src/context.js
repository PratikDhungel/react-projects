import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';

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

  const toggleAmount = (item_id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { item_id, type } });
  };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cartData = await response.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: cartData });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ ...state, clearCart, removeItem, increaseCount, decreaseCount, toggleAmount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
