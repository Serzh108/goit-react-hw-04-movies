import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="Nav">
      <li className="NavItem">
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'tomato',
          }}
          exact
          to="/">
          Home
        </NavLink>
      </li>
      <li className="NavItem">
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'tomato',
          }}
          exact
          to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
