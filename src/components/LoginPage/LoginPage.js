import React from 'react';
import classes from './LoginPage.css';

// components
import LoginForm from './LoginForm/LoginForm';

const loginpage = (props) => (
    <div className={classes.LoginPage}>
        <div>
            <h1>Login</h1>
        </div>
        <div>
            <LoginForm />
        </div>
        <div className={classes.underLine}>
            <h3 onClick={props.clicked}>Register here</h3>
            <div></div>
        </div>
    </div>
);
export default loginpage;