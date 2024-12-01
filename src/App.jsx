import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Recetas } from "./pages/Recetas";
import { Tradiciones } from "./pages/Tradiciones";
import { Busqueda } from "./pages/Busqueda";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recetas" element={<Recetas/>} />
          <Route path="/tradiciones" element={<Tradiciones/>} />
          <Route path="/busqueda" element={<Busqueda/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;