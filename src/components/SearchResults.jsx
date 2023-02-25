import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchResultVideoCard from './SearchResultVideoCard';
import { Context } from '../context/contextApi';
import { fetchDataFromAPI } from '../utils/api';
import LeftNav from './LeftNav';

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

  return (
    <div className="flex flex-row h-[calc(100%-56px)">
      <LeftNav />
      <div className="grow w-[calc(100%-240px) h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item, index) => {
            if (item.type !== 'video') return false;
            let video = item?.video;
            return <SearchResultVideoCard key={video?.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
