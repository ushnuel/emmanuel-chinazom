import React from 'react';
import Card from '../Cards/project';
import codeet from '../Assets/Images/codeet.jpg';
import spicyStore from '../Assets/Images/spicy-store.jpg';
import teamwork from '../Assets/Images/teamwork.jpg';
import queenAttack from '../Assets/Images/queen-attack.jpg';

const projects = () => (
  <div className='em-container em-project-container' id='project'>
    <h1>Projects</h1>
    <div className='em-card-container'>
      <Card name='Spicy Store' image={spicyStore} link='http://ushnuel.pythonanywhere.com' />
      <Card name='Codeet Solutions' image={codeet} link='http://codeet-ui.herokuapp.com' />
      <Card name='Teamwork App' image={teamwork} link='https://ushnuel.github.io/teamwork-ui/' />
      <Card
        name='Chess Game'
        image={queenAttack}
        link='https://ushnuel.github.io/Queen-Attack/ui/index.html'
      />
    </div>
  </div>
);

export default projects;
