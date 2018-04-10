import React, { Component } from 'react';
import classes from './Layout.css';

// components
import Navbar from '../Navbar/Navbar';
import Backdrop from '../SharedComponents/Backdrop/Backdrop';
import Aux from '../SharedComponents/Aux/Aux';
import Homepage from '../Homepage/Homepage';
import LocalPage from '../LocalPage/LocalPage';
import GlobalPage from '../GlobalPage/GlobalPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ProfilePage from '../ProfilePage/ProfilePage';

class Layout extends Component {
    state = {
        page: 'login',
        mobile: false,
        local: 0,
        global: 0
    }

    toggleNav = () => {
        this.setState({
            mobile: !this.state.mobile
        });
    }

    togglePage = (name) => {
        this.setState({
            page: name,
            mobile: !this.state.mobile
        });
    }

    addScore = () => {
        this.setState(prevState => ({
            local: prevState.local + 1,
            global: prevState.global + 1
        }))
    }

    register = () => {
        this.setState({
            page: 'register'
        })
    }
    login = () => {
        this.setState({
            page: 'login'
        })
    }
    render() {
        let currentPage = null;
        switch (this.state.page) {
            case 'homepage':
                currentPage = <Homepage
                local={this.state.local}
                global={this.state.global} />
                break;
            case 'local':
                currentPage = <LocalPage
                local={this.state.local}
                clicked={this.addScore}/>
                break;
            case 'global':
                currentPage = <GlobalPage
                local={this.state.local}
                global={this.state.global}/>
                break;
            case 'login':
                currentPage = <LoginPage
                clicked={this.register}/>
                break;
            case 'register':
                currentPage = <RegisterPage
                clicked={this.login}/>
                break;
            case 'profile':
                currentPage = <ProfilePage />
                break;
            default:
                currentPage = <Homepage />
        }
        let openBurger = null;
        if(!this.state.mobile){
            openBurger =
            <div
            onClick={this.toggleNav}
            className={classes.burger}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        }
        return (
            <div className={classes.Layout}>
                <Aux>
                    {openBurger}
                    <Navbar
                    toggle={this.state.mobile}
                    togglePage={this.togglePage} />
                    <Backdrop
                    toggle={this.state.mobile}
                    closeNav={this.toggleNav} />
                </Aux>
                {currentPage}
            </div>
        );
    }
}

export default Layout;