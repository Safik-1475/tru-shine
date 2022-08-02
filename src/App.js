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
import AddAdmin from './pages/Dashboard/AddAdmin';
import AddService from './pages/Dashboard/AddService';

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Navbar>
        <Routes>
          {/* Public Route */}
          {
            PublicRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
          }
          {/* Private Route */}
          <Route element={<RequireAuth />}>
            {
              PrivateRoute.map(({ path, Component }, index) => (<Route key={index} path={path} element={Component} />))
            }
          </Route>
          {/* Nested Route here */}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="add-admin" element={<AddAdmin />} />
              <Route path="add-service" element={<AddService />} />
            </Route>;
          </Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
