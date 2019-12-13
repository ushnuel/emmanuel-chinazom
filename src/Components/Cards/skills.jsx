import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const card = ({ name, icon }) => (
  <div className='em-card'>
    <div className='em-icon'>
      <FontAwesomeIcon icon={icon} size='3x' />
    </div>
    <div className='em-icon em-icon-type'>{name}</div>
  </div>
);

export default card;
