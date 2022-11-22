import React from 'react';
import '../../styles/Projects.css';
import news_agg from '../../assets/News_Agg.png';
import pet from '../../assets/Pet.png';
import project3 from '../../assets/Project3.png';
import weather from '../../assets/Weather.png';
import css_sheet from '../../assets/CSS_Sheet.png';
import pwgen from '../../assets/PWGen.png';

const styles = {
  label: {
    textAlign: "center",
  },
  github: {
    fontSize: "2.5rem",
  }
}

export default function Projects() {
  return (
    <div>
      <h1 className='titleLabel1'>Projects</h1>
      <section id='projectList'>
        {/* Project 1 */}
        <div className='project' style={styles.label}>
          <p>News Aggregator</p>
          <a href='https://honsumal.github.io/news-headline-aggregator/' target="_blank">
            <img src={news_agg} className="preview" alt='Preview of News Aggregator'/>
          </a>
          <a className='image-label' style={styles.github} href='https://github.com/Honsumal/news-headline-aggregator' target="_blank">
            <i className='fa fa-github'></i>
          </a>
        </div>
        {/* Project 2 */}
        <div className='project' style={styles.label}>
          <p>Coming soon!</p>
          <a href='#' target="_blank">
            <img src={project3} className="preview" alt='Preview of password generator app'/>
          </a>
          <a className='image-label' style={styles.github} target="_blank">
            <i className='fa fa-github'></i>
          </a>
        </div>
        {/* Project 3 */}
        <div className='project' style={styles.label}>
          <p>Pet Adoption Site</p>
          <a href='https://petplace2141.herokuapp.com/' target="_blank">
            <img src={pet} className="preview" alt='Preview of pet adoption site'/>
          </a>
          <a className='image-label' style={styles.github} href='https://github.com/Favour01216/Adoption-site' target="_blank">
            <i className='fa fa-github'></i>
          </a>
        </div>
        {/* Project 4 */}
        <div className='project' style={styles.label}>
          <p>Weather Forecast App</p>
          <a href='https://ellisjlc.github.io/Weather_Forecast/' target="_blank">
            <img src={weather} className="preview" alt='Preview of Weather Forecast app'/>
          </a>
          <a className='image-label' style={styles.github} href='https://github.com/EllisJLC/Weather_Forecast' target="_blank">
            <i className='fa fa-github'></i>
          </a>
        </div>
        {/* Project 5 */}
        <div className='project' style={styles.label}>
          <p>CSS Cheatsheet</p>
          <a href='https://ellisjlc.github.io/CSS_Guide/' target="_blank">
            <img src={css_sheet} className="preview" alt='Preview of CSS cheatsheet'/>
          </a>
          <a className='image-label' style={styles.github} href='https://github.com/EllisJLC/CSS_Guide' target="_blank">
            <i className='fa fa-github'></i>
          </a>
        </div>
        {/* Project 6 */}
        <div className='project' style={styles.label}>
          <p>Password Generator</p>
          <a href='https://ellisjlc.github.io/Password_Generator/' target="_blank">
            <img src={pwgen} className="preview" alt='Preview of password generator app'/>
          </a>
          <a className='image-label' style={styles.github} href="https://github.com/EllisJLC/Password_Generator" target="_blank">
            <i className='fa fa-github'></i>
          </a>
        </div>
      </section>
    </div>
  );
}
