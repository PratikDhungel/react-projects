import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  const [location, setLocation] = useState({});
  const [currentPage, setCurrentPage] = useState({ page: '', links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setCurrentPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(true);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, isSubmenuOpen, location, currentPage, openSidebar, closeSidebar, openSubmenu, closeSubmenu }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
