import "./App.css";
import HomePage from "./app/pages/homePage.template";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./app/core/components/home/home.template";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
