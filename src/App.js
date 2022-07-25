import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
