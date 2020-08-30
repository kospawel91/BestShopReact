import React from 'react';
import HeaderLogo from './HeaderLogo';
import Burger from './Burger';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <HeaderLogo name="BestShop"/>
      <Burger/>
    </nav>
  
  </header>
);
export default Header;

//dodac header list pod nav