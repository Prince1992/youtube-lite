import React, { createContext, useState, useEffect } from 'react';

import { fetchDataFromAPI } from '../utils/api';

export const Context = createContext();

const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [selectCategories, setSelectCategories] = useState('New');
  const [mobileMenu, setMobileMenu] = useState();

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);
  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
