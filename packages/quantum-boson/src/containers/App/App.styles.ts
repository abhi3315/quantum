import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) => ({
    '@global': {
        a: {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    bodyContainer: {
        padding: theme.spacing(1.5, 4),
    },
    container: {
        marginLeft: theme.spacing(12.5),
    },
}));
