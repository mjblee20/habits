import React from 'react';

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
            <h1>A</h1>
          </li>
          <li className='nav-icons'>
            <h1>B</h1>
          </li>
          <li className='nav-icons'>
            <h1>C</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
