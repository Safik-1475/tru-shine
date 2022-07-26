import Navbar from "./components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoutes";
import About from "./pages/About";
import Services from "./pages/Services";
import RequireAuth from './authentication/RequireAuth';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar>
        <Routes>
          {
            PublicRoutes.map(({ path, Component }) => <Route path={path} element={<Component />} />)
          }
          {
            PrivateRoute.map(route => <Route element={<RequireAuth>
              <Route path={route.path} element={route.Component} />
            </RequireAuth>} />)
          }
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
