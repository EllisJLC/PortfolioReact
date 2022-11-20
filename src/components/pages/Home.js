import React from 'react';
import '../../styles/Home.css';
import 'animate.css';
import image from '../../assets/Portrait.png'

const styles = {
  mainHeader: {
    fontSize: "100px"
  },
  secondaryHeader: {
    fontSize: "60px",
  },
  portrait: {
    paddingTop: "100px",
    maxWidth: "300px",
    maxHeight: "300px",
  }
}

export default function Home() {
  return (
    <section>
    <div className="container row">
        <div className="col-9">
          <h1 id='mainLabel1' style={styles.mainHeader}>Jia Liang Chen</h1>
          <h3 id='mainLabel2' style={styles.secondaryHeader}>Digital artist (Kinda)</h3>
          <h3 id='mainLabel3' style={styles.secondaryHeader}>Game Enthusiast</h3>
          <h3 id='mainLabel4' style={styles.secondaryHeader}>Web Developer</h3>
        </div>
        <div className="col-md-auto justify-content-center">
          <img src={image} alt='Portrait' style={styles.portrait}/>
        </div>
      </div>
    </section>
  );
}
