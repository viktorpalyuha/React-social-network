import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink className={classes.item} activeClassName={classes.active} to="/profile" >Profile</NavLink>
        </li>
        <li>
          <NavLink className={classes.item} activeClassName={classes.active} to="/dialogs">Messages</NavLink>
        </li>
        <li>
          <NavLink className={classes.item} activeClassName={classes.active} to="/news">News</NavLink>
        </li>
        <li>
          <NavLink className={classes.item} activeClassName={classes.active} to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink className={classes.item} activeClassName={classes.active} to="/settings">Settings</NavLink>
        </li>
          <FriendsContainer />
      </ul>
    </nav>
  );
};

export default Navbar;
