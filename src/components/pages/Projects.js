import React from 'react';
import '../../styles/Projects.css';
import pwgen from '../../assets/PWGen.png';

const styles = {
  label: {
    textAlign: "center",
  }
}

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section id='projectList'>
        <div className='project'>
          <a href='#'>
            <img src={pwgen} className="preview" alt='Preview of password generator app'/>
          </a>
          <a href='#' style={styles.label}>
            A simple password generator app.
          </a>
        </div>
        <div className='project'>
          <a href='#'>
            <img src={pwgen} className="preview" alt='Preview of password generator app'/>
          </a>
          <a href='#' style={styles.label}>
            A simple password generator app.
          </a>
        </div>
        <div className='project'>
          <a href='#'>
            <img src={pwgen} className="preview" alt='Preview of password generator app'/>
          </a>
          <a href='#' style={styles.label}>
            A simple password generator app.
          </a>
        </div>
      </section>
    </div>
  );
}
