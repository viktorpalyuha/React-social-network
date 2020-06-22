import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Gulf_logo.png" alt="logo" />
        </header>
    )
}

export default Header;