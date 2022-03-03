import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '@quantum/boson/src/containers/App';
import store from '@quantum/boson/src/redux';
import theme from '@quantum/boson/src/constants/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline />
                <Router>
                    <App />
                </Router>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
