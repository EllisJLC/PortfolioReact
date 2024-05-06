import React from 'react';
import '../../styles/Projects.css';
import news_agg from '../../assets/News_Agg.png';
import pet from '../../assets/Pet.png';
import swift_bank from '../../assets/Swift_Bank.png';
import weather from '../../assets/Weather.png';
import css_sheet from '../../assets/CSS_Sheet.png';
import Galaxy from '../../assets/Galaxy.png';

const styles = { // will need css styling for hover effects
  label: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    padding: "3.125rem"
  },
  github: {
    fontSize: "2.5rem",
  }
}

export default function Projects() {
  const JSProjects = [
    // Project 1
    {
      name: "Galaxy Generator (requires Vercel Login)",
      link: 'https://3js-galaxy-generator-gjgnlll9g-ellisons-projects.vercel.app/',
      preview: Galaxy,
      githubLink: "https://github.com/EllisJLC/3js_GalaxyGenerator"
    },
    // Project 2
    {
      name: "News Aggregator",
      link: 'https://honsumal.github.io/news-headline-aggregator/',
      preview: news_agg,
      githubLink: "https://github.com/Honsumal/news-headline-aggregator"
    },
    // Project 3
    {
      name: "Weather Forecast App",
      link: 'https://ellisjlc.github.io/Weather_Forecast/',
      preview: weather,
      githubLink: "https://github.com/EllisJLC/Weather_Forecast"
    },
    // Project 4
    {
      name: "CSS Cheatsheet",
      link: 'https://ellisjlc.github.io/CSS_Guide/',
      preview: css_sheet,
      githubLink: "https://github.com/EllisJLC/CSS_Guide"
    },    
  ]

  return (
    <div>
      <h1 className='titleLabel1'>Projects</h1>
      <section id='projectList'>
        {/* JS Projects Display */}
        { JSProjects.map((project) => (
          <div style={styles.label} key={project.name} className="project">
            <p>{project.name}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.preview} className="preview" alt={"Preview of "+project.name}/>
            </a>
            <a className='image-label' style={styles.github} href={project.githubLink} target="_blank" rel="noreferrer">
              <i className='fa fa-github'></i>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
