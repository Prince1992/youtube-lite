import { useContext, useEffect } from 'react';
import { Context } from '../context/contextApi';
import VideoCard from './VideoCard';
import LeftNav from './LeftNav';

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
  }, []);
  console.log('Video List >>>', searchResults);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-5">
          {!loading &&
            searchResults !== undefined &&
            searchResults.length > 0 &&
            searchResults?.map((item) => {
              console.log('>>>>', item.type);
              if (item?.type !== 'video') return false;
              return <VideoCard video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
