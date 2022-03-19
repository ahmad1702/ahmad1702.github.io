import "./styles.css";
import Skills from "./components/Skills/Skills";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Photo from "./components/Photo/Photo";
import Dev from "./components/Dev/Dev";
import VisualArt from "./components/VisualArt/Visualart";
import ErrorPage from "./components/Error/ErrorPage";
import Nav from "./components/Nav/Nav";
import Translang from './components/Translang/Translang'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photo />} />
        <Route path="/visualart" element={<VisualArt />} />
        <Route path="/development" element={<Dev />} />
        <Route path="/translang" element={<Translang />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
