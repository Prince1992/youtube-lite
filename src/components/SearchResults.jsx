import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchResultVideoCard from './SearchResultVideoCard';
import { Context } from '../context/contextApi';
import { fetchDataFromAPI } from '../utils/api';

const SearchResults = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    fetchSearchResult();
  }, [searchQuery]);

  const fetchSearchResult = () => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${searchQuery}`).then((res) => {
      console.log(res?.contents);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return <div>SearchResults</div>;
};

export default SearchResults;
