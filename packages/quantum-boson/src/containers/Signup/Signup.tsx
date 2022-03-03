import { Link } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Logo from '@quantum/boson/src/static/logo.png';

import useStyles from './Signup.styles';

const Signup = () => {
    const classes = useStyles();

    const validationSchema = yup.object({
        firstName: yup.string().required('First name is required'),
        email: yup.string().email('Enter a valid email').required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password should be of minimum 6 characters length')
            .required('Password is required'),
        confirmPassword: yup
            .string()
            .required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Your passwords do not match.'),
    });

    const onSubmit = () => {};

    const { handleSubmit, values, handleChange, touched, errors } = useFormik({
        initialValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit,
    });

    return (
        <Grid container className={classes.root}>
            <Grid item xs={10} sm={8} md={4} className={classes.formContainer}>
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <div>
                        <section className={classes.header}>
                            <img src={Logo} alt="logo" className={classes.logo} />
                        </section>
                        <Typography variant="h5" align="center" color="primary">
                            TPO Sign-up
                        </Typography>
                    </div>
                    <div>
                        <TextField
                            autoFocus
                            label="First Name"
                            name="firstName"
                            margin="dense"
                            size="small"
                            required
                            fullWidth
                            error={touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            value={values.firstName}
                            onChange={handleChange}
                        />
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Middle Name"
                                    name="middleName"
                                    margin="dense"
                                    size="small"
                                    value={values.middleName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Last Name"
                                    name="lastName"
                                    margin="dense"
                                    size="small"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            margin="dense"
                            size="small"
                            required
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
                            margin="dense"
                            size="small"
                            required
                            error={touched.password && !!errors.password}
                            helperText={touched.password && errors.password}
                            value={values.password}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            margin="dense"
                            size="small"
                            required
                            error={touched.confirmPassword && !!errors.confirmPassword}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                            value={values.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <Button color="primary" fullWidth type="submit" variant="contained">
                        Signup
                    </Button>
                    <Typography>
                        Already have an account? <Link to="/login">Login</Link>
                    </Typography>
                </form>
            </Grid>
        </Grid>
    );
};

export default Signup;
