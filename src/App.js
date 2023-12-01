import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Sobremim } from "./components/Sobremim";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremim" element={<Sobremim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
