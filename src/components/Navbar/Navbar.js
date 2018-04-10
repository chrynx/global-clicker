import React from 'react';
import classes from './Navbar.css';

const navbar = (props) => {
    let classList = [classes.Navbar, classes.Open].join(' ');
    if(!props.toggle){
        classList = [classes.Navbar, classes.Close].join(' ');
    }
    return (
        <nav className={classList}>
            <ul>
                <li onClick={() => props.togglePage("homepage")}>Homepage</li>
                <li onClick={() => props.togglePage("local")}>Local</li>
                <li onClick={() => props.togglePage("global")}>Global</li>
                <li onClick={() => props.togglePage("login")}>Login</li>
                <li onClick={() => props.togglePage("register")}>Register</li>
                <li onClick={() => props.togglePage("logout")}>Logout</li>
            </ul>
        </nav>
    );
};
export default navbar;