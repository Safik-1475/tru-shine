import Navbar from "./components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Route, Routes } from "react-router-dom";
import RequireAuth from './authentication/RequireAuth';
import { PrivateRoute } from './routes/PrivateRoutes';

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Navbar>
        <Routes>
          {
            PublicRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
          }
          <Route element={<RequireAuth />}>
            {
              PrivateRoute.map(({ path, Component }, index) => (<Route key={index} path={path} element={Component} />))
            }
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
