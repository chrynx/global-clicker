import React from 'react';
import classes from './LoginForm.css';

const loginForm = (props) => (
    <form className={classes.LoginForm}onSubmit={props.formSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login</button>
    </form>
);
export default loginForm;