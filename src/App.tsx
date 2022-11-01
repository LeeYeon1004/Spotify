import "./App.css";
import HomePage from "./app/pages/home.template";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
