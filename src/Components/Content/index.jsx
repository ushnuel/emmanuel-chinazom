import React from 'react';
import Profile from './profile';
import Skills from './skills';
import Projects from './project';
import Contact from './contact';
import './index.css';

const content = () => (
  <div className='em-main'>
    <div className='em-sidebar'>
      <a href='#profile'>
        <h3>Career Profile</h3>
      </a>
      <a href='#skill'>
        <h3>Core Skills</h3>
      </a>
      <a href='#project'>
        <h3>My Project</h3>
      </a>
      <a href='#contact'>
        <h3>Contact Me</h3>
      </a>
    </div>
    <div className='em-main-content'>
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </div>
  </div>
);

export default content;
