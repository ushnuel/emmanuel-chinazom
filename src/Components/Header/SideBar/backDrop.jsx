import React from 'react';

const backDrop = ({ closeSideDrawer, isSideDrawerOpen }) => {
  return isSideDrawerOpen ? <div onClick={closeSideDrawer} className='em-backdrop' /> : null;
};

export default backDrop;
