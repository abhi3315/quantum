import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import bgImage from '@quantum/boson/src/static/bg.jpeg';

export default makeStyles((theme: Theme) => ({
    root: {
        alignItems: 'center',
        background: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${bgImage})`,
        backgroundColor: theme.palette.grey[50],
        backgroundPosition: 'center',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
    },
    formContainer: {
        padding: theme.spacing(2, 4),
        background: 'white',
        borderRadius: theme.spacing(1),
        boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
    },
    logo: {
        height: theme.spacing(10),
    },
    form: {
        alignItems: 'center',
        display: 'flex',
        minHeight: 500,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(2.5),
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));
