import React from 'react';
import '../../styles/Resume.css'
import resume from '../../assets/Resume.pdf'

export default function Resume() {
  return (
    <section id='resume1' >
      <h1 className='titleLabel2'>Resume - Key Skills</h1>
      <ul className='resumeText'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Web APIs</li>
        <li>Third Party APIs</li>
        <li>Server-side APIs</li>
        <li>Object-Oriented Programming</li>
        <li>SQL</li>
        <li>MERN Stack: MongoDb, Express.js, React, Node.js</li>
      </ul>
      <p className='resumeText'>Download my full resume <a href={resume} download>here</a>!</p>
    </section>
  );
}
