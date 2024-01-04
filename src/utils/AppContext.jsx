import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarData, setSidebarData] = useState(null);
  const [title, setTitle] = React.useState('');

  const setSidebarDataValue = (data) => {
    setSidebarData(data);
  };

  const setComponentTitle = (title) => {
    setTitle(title);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarData,
        setSidebarData: setSidebarDataValue,
        title,
        setTitle: setComponentTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// export const useTitle = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('useTitle must be used within a AppProvider');
//   }
//   return context;
// };

export const useAppContext = () => {
  return useContext(AppContext);
};
