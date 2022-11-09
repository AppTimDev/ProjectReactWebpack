import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">default</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/ttt">Not</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default NavBar;