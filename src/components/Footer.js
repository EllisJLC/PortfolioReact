import React from 'react';
import '../styles/Footer.css';

const styles = {
  footer: {
    backgroundColor: "#5386E4",
    color: "#2A2B2A",
    height: "9.375rem",
  },
  label1: {
    textAlign: 'center',
    paddingBottom: "0.625rem",
    paddingTop: "2rem"
  },
  label2: {
    textAlign: 'center',
    paddingBottom: "0.625rem",
  },
  link: {
    color: "#2A2B2A",
    textDecoration: "none",
    paddingRight: "0.625rem"
  },
}


export default function Footer() {
  return (
    <footer style={styles.footer} className='text-center text-lg-start' id='footerSection'>
      <h4 style={styles.label1}>Made using React by a potato</h4>
      <h4 style={styles.label2}>
        <a href='https://github.com/EllisJLC' style={styles.link} target="_blank"><i className='fa fa-github'></i></a> 
        <a href='https://www.linkedin.com/in/jia-liang-ellison-chen/' style={styles.link} target="_blank"><i className='fa fa-linkedin'></i></a> 
        <a href='https://www.twitch.tv/knowledgeable_potato' style={styles.link}><i className='fa fa-twitch'></i></a>
      </h4>
    </footer>
  );
}