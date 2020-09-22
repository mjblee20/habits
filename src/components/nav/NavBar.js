import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='nav-brand'>
        <span className='nav-icons'>
          <h1>#</h1>
        </span>
      </div>
      <div className='nav-list'>
        <ul>
          <li className='nav-icons'>
            <NavLink to='/'>A</NavLink>
          </li>
          <li className='nav-icons'>
            <NavLink to='/habitbuilder'>B</NavLink>
          </li>
          <li className='nav-icons'>
            <NavLink to='/todo'>C</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
