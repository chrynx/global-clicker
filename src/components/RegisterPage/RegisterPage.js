import React from 'react';
import classes from './RegisterPage.css';

// components
import RegisterForm from './RegisterForm/RegisterForm';

const registerpage = (props) => (
    <div className={classes.RegisterPage}>
        <div>
            <h1>Register</h1>
        </div>
        <div>
            <RegisterForm />
        </div>
        <div className={classes.underLine}>
            <h3 onClick={props.clicked}>Login here</h3>
            <div></div>
        </div>
    </div>
);

export default registerpage;