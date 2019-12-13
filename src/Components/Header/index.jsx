import React from 'react';
import Navbar from './Navbar/navbar';
import SideDrawer from './SideBar/sideDrawer';
import './index.css';

const header = ({ openSideDrawer, closeSideDrawer, isSideDrawerOpen }) => (
  <div className='em-header'>
    <Navbar openSideDrawer={openSideDrawer} />
    <SideDrawer isSideDrawerOpen={isSideDrawerOpen} closeSideDrawer={closeSideDrawer} />
  </div>
);

export default header;
