import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/static/logo-cmx.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <div className='Header'>
    <Link to='/'>
      <img alt='CovidMx' src={logo} className='Header__logo' />
    </Link>
    <nav className='Header__nav'>
      <ul>
        <li>
          <Link to='/team'>
            The Team
          </Link>
        </li>
      </ul>
    </nav>

  </div>
);

export default Header;
