import "./App.css";
import HomePage from "./app/pages/home/homePage.template";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./app/core/components/dashboard/dashboard.template";
import Queue from "./app/pages/queue/queue.template";
import Search from "./app/pages/search/search.template";
import SongDetail from "./app/pages/song-detail/songDetail.template";
import PlayList from "./app/pages/playlist/playList.template";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/" element={<HomePage />}>
            <Route path="/home" element={<Dashboard />}></Route>
            <Route path="/queue" element={<Queue />} />
            <Route path="/search" element={<Search />} />
            <Route path="/song-detail/:slugAudio" element={<SongDetail />} />
            <Route path="/playlist" element={<PlayList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
