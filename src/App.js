import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Login from "./pages/Login";
import RequireAuth from "./authentication/RequireAuth";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path="/login" element={<Login />} />
          <Route element={<RequireAuth>
            <Route path="/about" element={<About />} />
          </RequireAuth>} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
