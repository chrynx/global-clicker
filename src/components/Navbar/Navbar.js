import React from 'react';
import classes from './Navbar.css';
import { userInfo } from 'os';

const navbar = (props) => {
    let classList = [classes.Navbar, classes.Open].join(' ');
    if(!props.toggle){
        classList = [classes.Navbar, classes.Close].join(' ');
    }
    let logoutButton = null;
    if(props.isLoggedIn) {
        logoutButton = <li onClick={() => props.togglePage("logout")}>Logout</li>;
    }
    return (
        <nav className={classList}>
            <ul>
                <li onClick={() => props.togglePage("homepage")}>Homepage</li>
                <li onClick={() => props.togglePage("local")}>Local</li>
                <li onClick={() => props.togglePage("global")}>Global</li>
                <li onClick={() => props.togglePage("login")}>Login</li>
                <li onClick={() => props.togglePage("register")}>Register</li>
                {logoutButton}
            </ul>
        </nav>
    );
};
export default navbar;