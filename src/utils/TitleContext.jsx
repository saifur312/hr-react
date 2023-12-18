import React, { createContext, useContext } from 'react';

const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = React.useState('');

  const setComponentTitle = (componentTitle) => {
    setTitle(componentTitle);
  };

  return (
    <TitleContext.Provider value={{ title, setComponentTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error('useTitle must be used within a TitleProvider');
  }
  return context;
};
