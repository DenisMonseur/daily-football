import React, { createContext, useState, useContext } from 'react';

const ListContext = createContext();


export const ListProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  const addToList = (item) => {
    setMyList([...myList, item]);
  };

  return (
    <ListContext.Provider value={{ myList, addToList }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);