import React from 'react';
import NavigationItem from '../Navigation/navigationItem';
import Logo from './logo';
import Hamburger from './hamburger';

const navbar = ({ openSideDrawer }) => {
  return (
    <header className='em-navbar'>
      <Hamburger openSideDrawer={openSideDrawer} />
      <Logo />
      <nav className='em-desktop-view'>
        <NavigationItem />
      </nav>
    </header>
  );
};

export default navbar;
