import React from 'react';
import { useHistory } from 'react-router-dom';

// Material UI
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon  from '@material-ui/icons/Search';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

// Png Gmail Logo
import GmailLogo from '../../assets/GmailLogo.png';

import './Nav.css';

const Nav = () => {

    const history = useHistory();

    return (
        <header className="header">

            <nav className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img 
                    src={ GmailLogo } 
                    alt="gmailLogo"
                    onClick={ () => history.push("/") }
                />
            </nav>

            <nav className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="search email" />
                <ArrowDropDown className="header__inputCaret" />
            </nav>

            <nav className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </nav>
        </header>
    )
}

export default Nav;
