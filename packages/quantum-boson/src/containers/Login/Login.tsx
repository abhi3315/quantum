import { Link } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Logo from '@quantum/boson/src/static/logo.png';

import useStyles from './Login.styles';

const Login = () => {
    const classes = useStyles();

    const validationSchema = yup.object({
        email: yup.string().email('Enter a valid email').required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const onSubmit = () => {};

    const { handleSubmit, values, handleChange, touched, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit,
    });

    return (
        <Grid container className={classes.root}>
            <Grid item xs={10} sm={8} md={4} className={classes.formContainer}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div>
                        <section className={classes.header}>
                            <img src={Logo} alt="logo" className={classes.logo} />
                        </section>
                        <Typography variant="h5" align="center" color="primary">
                            TPO Login
                        </Typography>
                    </div>
                    <div>
                        <TextField
                            autoFocus
                            fullWidth
                            label="Email"
                            name="email"
                            variant="outlined"
                            margin="dense"
                            size="small"
                            error={touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            value={values.email}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            variant="outlined"
                            margin="dense"
                            size="small"
                            error={touched.password && !!errors.password}
                            helperText={touched.password && errors.password}
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <Button color="primary" fullWidth type="submit" variant="contained">
                        Login
                    </Button>
                    <Typography>
                        Don't have an account? <Link to="/signup">Sign-up</Link>
                    </Typography>
                </form>
            </Grid>
        </Grid>
    );
};

export default Login;
