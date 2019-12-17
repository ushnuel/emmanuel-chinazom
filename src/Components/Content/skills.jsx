import React from 'react';
import {
  faReact,
  faVuejs,
  faPython,
  faCss3,
  faNodeJs,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons';
import Card from '../Cards/skills';

const skills = () => (
  <div className='em-container em-skills-container' id='skill'>
    <h1>Core Skills</h1>
    <div className='em-skills'>
      <div className='em-skills-div'>
        <h3>Programming</h3>
        <section className='em-card-container'>
          <Card name='Node' icon={faNodeJs} />
          <Card name='Vue' icon={faVuejs} />
          <Card name='React' icon={faReact} />
          <Card name='Python' icon={faPython} />
          <Card name='Css' icon={faCss3} />
          <Card name='Html' icon={faHtml5} />
        </section>
      </div>
      <div className='em-skills-div'>
        <h3>Database</h3>
        <ul>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Google Firebase</li>
        </ul>
      </div>
      <div className='em-skills-div'>
        <h3>Other Skills</h3>
        <ul>
          <li>Version Control (git)</li>
          <li>Code Quality (TravisCI, Coveralls)</li>
          <li>Communication (Zoom, Slack)</li>
          <li>Testing (mocha, chai)</li>
          <li>Github Project Management</li>
        </ul>
      </div>
    </div>
  </div>
);

export default skills;
