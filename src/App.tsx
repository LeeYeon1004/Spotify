import "./App.css";
import HomePage from "./app/pages/home.template";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainHome from "./app/core/components/home-main/mainHome.template";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />}>
            <Route path="/home" element={<MainHome />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
