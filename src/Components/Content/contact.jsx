import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const contact = () => (
  <div className='em-container em-contact-me show-on-scroll' id='contact'>
    <a href='mailto:ezeemmanuel2010@gmail.com'>
      <button className='em-btn-contact'>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        Send me a mail
      </button>
    </a>
    <a href='tel:+2348137370891'>
      <button className='em-btn-contact'>
        <span>
          <FontAwesomeIcon icon={faPhone} />
        </span>
        Call Me
      </button>
    </a>
  </div>
);
export default contact;
