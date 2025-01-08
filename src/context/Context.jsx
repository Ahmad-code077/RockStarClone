import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // the data of the form after submitting the transcition id and image

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  console.log('is side bar open', isSidebarOpen);
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
