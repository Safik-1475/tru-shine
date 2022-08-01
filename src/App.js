import Navbar from "./components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Route, Routes } from "react-router-dom";
import RequireAuth from './authentication/RequireAuth';
import { PrivateRoute } from './routes/PrivateRoutes';
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

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
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />;
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
