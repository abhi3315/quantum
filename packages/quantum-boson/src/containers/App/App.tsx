import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '@quantum/boson/src/containers/Login';

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default App;
