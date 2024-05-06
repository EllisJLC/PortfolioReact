import React from 'react';
import '../../styles/Home.css';
import 'animate.css';
import image from '../../assets/Portrait.png'

const styles = {
  mainHeader: {
    fontSize: "5rem"
  },
  secondaryHeader: {
    fontSize: "2rem",
  },
  portrait: {
    paddingTop: "1rem",
    maxWidth: "30rem",
    maxHeight: "30rem",
    paddingBottom: "2rem",
    paddingLeft: "5rem"
  }
}

export default function Home() {
  return (
    <div className='container row'>
      <div className="col-6">
        <h1 id='mainLabel1' style={styles.mainHeader} className='titleLabel'>Jia Liang Chen</h1>
        <h3 id='mainLabel2' style={styles.secondaryHeader}>Digital artist</h3>
        <h3 id='mainLabel3' style={styles.secondaryHeader}>Game Enthusiast</h3>
        <h3 id='mainLabel4' style={styles.secondaryHeader}>Web Developer</h3>
      </div>
      <div className="col-6 justify-content-right">
        <img src={image} alt='Portrait' style={styles.portrait}/>
      </div>
    </div>
  );
}
