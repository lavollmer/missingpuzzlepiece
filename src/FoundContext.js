import React from 'react';

export const FoundContext = React.createContext();

export const FoundProvider = ({ children }) => {
    const [foundCount, setFoundCount] = React.useState(0);
  
    const incrementFound = () => {
      setFoundCount(foundCount + 1);
    };
  
    return (
      <FoundContext.Provider value={{ foundCount, incrementFound }}>
        {children}
      </FoundContext.Provider>
    );
  };