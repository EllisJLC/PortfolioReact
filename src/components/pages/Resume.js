import React from 'react';
import resume from '../../assets/Resume.pdf';

export default function Resume() {
  const styles = {
    title: {
      paddingLeft: "4rem"
    },
    body: {
      paddingTop: "1rem",
      paddingLeft: "0.625rem"
    },
    resumeList: {
      marginLeft: "5rem"
    },
    downloadLink: {
      marginLeft: "4rem",
      marginTop: "1.5rem"
    }
  }
  return (
    <section style={styles.body} >
      <h1 style={styles.title}>Resume - Key Skills</h1>
      <ul style={styles.resumeList}>
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
      <p style={styles.downloadLink}>Download my full resume <a href={resume} download>here</a>!</p>
    </section>
  );
}
