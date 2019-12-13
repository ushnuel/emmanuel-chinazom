/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const footer = () => (
  <footer className='em-container em-footer'>
    <p>
      &copy; 2019 | All rights reserved. <span>Emmanuel Chinazom | Software Solutions</span>
    </p>
    <a href='#'>
      <FontAwesomeIcon icon={faArrowCircleUp} size='3x' />
    </a>
  </footer>
);

export default footer;
