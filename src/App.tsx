import "./App.css";
import HomePage from "./app/pages/homePage.template";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./app/core/components/home/home.template";
import Queue from "./app/core/components/queue/queue.template";
import Search from "./app/core/components/search/search.template";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/" element={<HomePage />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/queue" element={<Queue />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
