import React from 'react';

const styles = {
  paragraphs: {
    marginLeft: "4.5rem",
    marginRight: "4.5rem",
  },
  titleLabel: {
    paddingLeft: "4rem"
  }
}

export default function About() {
  return (
    <div>
      <h1 style={styles.titleLabel}>My Journey</h1>
      <br/>
      <p style={styles.paragraphs}>
        My name is Jia Liang (Ellison) Chen and I am a web developer! My journey of developing software has been long 
        and eventful, starting with C# in the 10th grade. I understood none of it and refused to go back to development...<br/>
        <br/>
        Until inevitably I was forced to take Computer Science for Scientists with Matlab, which is where programming
        started to make sense! I excelled in Matlab, even expanding into Python in Computer Science 1, teaching myself
        the entire cirriculum and achieving a 100% grade.<br/>
        <br/>
        Around the same time, I had started working on JavaScript in a small contracted job I had picked up from a close
        contact and had begun teaching myself JavaScript over one summer.<br/>
        <br/>
        I continued to find programming fascinating, eventually taking UofT's SCS Web Development Flex Stack course, where
        I am thoroughly enjoying learning new concepts and being able to expand my understanding even further!<br/>
        <br/>
        I don't know what the future holds, but I'm sure there will be plenty of programming and I am fully welcoming it
        with open arms!
      </p>
      <br/>
      <h1 className='titleLabel1'>My Hobbies</h1>
      <br/>
      <p style={styles.paragraphs}>
        Video gaming has been a major interest of mine, even streaming and enjoying all genres of games with the small community I had built.
        <br/><br/>
        I enjoy socializing and meeting new people through all mediums, whether it be online, or in person, so feel free to say hello!
        <br/><br/>
        I find myself singing along to some music though am very shy about singing in front of others!
        <br/><br/>
        Open to new things to do!
      </p>
    </div>
  );
}
