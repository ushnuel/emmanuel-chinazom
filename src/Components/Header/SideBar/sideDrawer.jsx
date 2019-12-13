import React from 'react';
import Backdrop from './backDrop';
import NavigationItem from '../Navigation/navigationItem';

const sideDrawer = ({ isSideDrawerOpen, closeSideDrawer }) => {
  let classname = 'em-sidedrawer em-close';
  if (isSideDrawerOpen) {
    classname = 'em-sidedrawer em-open';
  }
  return (
    <>
      <Backdrop closeSideDrawer={closeSideDrawer} isSideDrawerOpen={isSideDrawerOpen} />
      <div className={classname}>
        <div className='em-logo'>
          <h2>
            Emma<span>nuel</span>
          </h2>
        </div>
        <hr className='hr' />
        <div className='em-items'>
          <NavigationItem />
        </div>
      </div>
    </>
  );
};

export default sideDrawer;
