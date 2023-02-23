import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Feed from './components/Feed';
import SearchResults from './components/SearchResults';
import AppContext from './context/contextApi';
import VideoDetails from './components/VideoDetails';

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResults />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
