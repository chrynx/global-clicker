import React from 'react';
import classes from './RegisterForm.css';
const registerForm = (props) => (
    <form className={classes.RegisterForm} onSubmit={props.formSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="passwordCheck" placeholder="Repeat Password" />
        <button>Register</button>
    </form>
);
export default registerForm;