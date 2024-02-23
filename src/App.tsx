import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layouts/Footer/Footer";
import Navbar from "./components/Layouts/Navbar/Navbar";
import Accessories from "./components/Pages/Accessories/Accessories";
import Home from "./components/Pages/Home/Home";
import Keyboards from "./components/Pages/Keyboards/Keyboards";
import Keycaps from "./components/Pages/Keycaps/Keycaps";
import Switches from "./components/Pages/Switches/Switches";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="keyboards" element={<Keyboards />} />
        <Route path="keycaps" element={<Keycaps />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="switches" element={<Switches />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
