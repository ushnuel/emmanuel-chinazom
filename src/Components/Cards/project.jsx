import React from 'react';

const profile = ({ image, name, link }) => (
  <div className='em-card em-card-project show-on-scroll'>
    <div className='em-card-image em-proj'>
      <img src={image} alt='project' className='em-card-img' />
    </div>
    <div className='em-icon-type'>
      <a href={link}>{name}</a>
    </div>
  </div>
);

export default profile;
