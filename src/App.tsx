import "./App.css";
import HomePage from "./app/pages/homePage.template";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./app/core/components/dashboard/dashboard.template";
import Queue from "./app/core/components/queue/queue.template";
import Search from "./app/core/components/search/search.template";
import SongDetail from "./app/core/components/song-detail/songDetail.template";

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
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
