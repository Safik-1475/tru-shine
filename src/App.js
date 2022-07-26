import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
