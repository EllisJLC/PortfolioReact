import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const styles = {
  footer: {
    backgroundColor: "#5386E4",
    color: "#2A2B2A",
    height: "150px",
    paddingTop: "30px",
  },
  label: {
    textAlign: 'center',
    paddingBottom: "10px",
  },
  link: {
    color: "#2A2B2A",
    textDecoration: "none",
    paddingRight: "10px"
  }
}


export default function Footer() {
  return (
    <MDBFooter style={styles.footer} className='text-center text-lg-start'>
      <h4 style={styles.label}>Made using React by Jia Liang Chen</h4>
      <h4 style={styles.label}>
        <a href='https://github.com/EllisJLC' style={styles.link}><i className='fa fa-github'></i></a> 
        <a href='https://www.linkedin.com/in/jia-liang-ellison-chen/' style={styles.link}><i className='fa fa-linkedin'></i></a> 
        <a><i className='fa fa-twitch'></i></a>
      </h4>
    </MDBFooter>
  );
}