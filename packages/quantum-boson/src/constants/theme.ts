import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#035070',
            light: '#437c9f',
            dark: '#002845',
        },
        secondary: {
            main: '#f24c62',
            light: '#ff808f',
            dark: '#b9003',
        },
        success: {
            main: '#27ae60',
            light: '#64e18e',
            dark: '#007d34',
        },
        warning: {
            main: '#f39c12',
            light: '#ffcd4e',
            dark: '#bb6e00',
        },
        error: {
            main: '#d32f2f',
            light: '#ff6659',
            dark: '#9a0007',
        },
        info: {
            main: '#2196f3',
            light: '#6ec6ff',
            dark: '#0069c0',
        },
    },
});

export default theme;
