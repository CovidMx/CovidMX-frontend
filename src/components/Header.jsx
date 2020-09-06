import React from 'react';

import logo from '../assets/static/logo-cmx.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <div className='Header'>
    <img alt='CovidMx' src={logo} className='Header__logo' />
    <nav className='Header__nav'>
      <ul>
        <li>
          <a href='/'>News</a>
        </li>
        <li>
          <a href='/'>The Team</a>
        </li>
      </ul>
    </nav>

  </div>
);

export default Header;
