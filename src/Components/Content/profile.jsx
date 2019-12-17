import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import image from '../Assets/Images/profile.jpg';

const profile = () => (
  <div className='em-container em-profile-container' id='profile'>
    <div className='em-profile-image show-on-scroll'>
      <img src={image} alt='profile' className='em-profile-img' />
    </div>
    <div className='em-profile-summary display'>
      <h1>Career Summary</h1>
      <p>
        My name is Emmanuel Chinazom. I am a full stack software developer with more than 1 year of
        experience developing scalable and optimized web applications.
      </p>
      <p className='em-display'>
        A lover of God and fairness from Enugu state, graduated from electrical engineering
        department, University of Nigeria, Nsukka with a second class upper division. I love solving
        problems, research and reading creative books. <br /> <br />
        <em>
          I believe nothing is impossible to achieve - all we need is persistence and hardwork
        </em>
      </p>
      <div className='em-profile-social'>
        <a href='https://www.linkedin.com/in/emmanuel-chinazom-99026a163'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='https://twitter.com/ChinazoEmmanuel'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='https://web.facebook.com/emmanuel.chinazom.1'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </div>
  </div>
);

export default profile;
