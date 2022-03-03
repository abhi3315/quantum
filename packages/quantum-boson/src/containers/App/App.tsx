import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from '@quantum/boson/src/containers/Login';
import Signup from '@quantum/boson/src/containers/Signup';

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const nonAuthRoutes = ['/login', '/signup'];
        if (nonAuthRoutes.includes(location.pathname)) return;

        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
            navigate('/login');
        }
    }, [location.pathname, navigate]);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default App;
