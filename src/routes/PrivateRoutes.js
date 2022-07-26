import Services from '../pages/Services';
import About from './../pages/About';
// PRIVATE ROUTE
export const PrivateRoute = [
    { path: '/about', name: 'About', Component: About },
    { path: '/services', name: 'Services', Component: Services }
]