import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleModal = (state) => {
    setIsModalOpen(state);
  };

  const toggleSidebar = (state) => {
    setIsSidebarOpen(state);
  };

  return (
    <AppContext.Provider value={{ isModalOpen, isSidebarOpen, toggleModal, toggleSidebar }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
