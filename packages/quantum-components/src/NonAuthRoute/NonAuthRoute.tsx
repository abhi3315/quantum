import { useEffect, FC } from 'react';
import { useNavigate } from 'react-router';
import { Route } from 'react-router-dom';

const NonAuthRoute = (props: { component: FC; path: string }) => {
    const { component: Component, path } = props;

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const navigate = useNavigate();
        if (token) {
            navigate('/');
        }
    }, []);

    return <Route path={path} element={<Component />}></Route>;
};

export default NonAuthRoute;
