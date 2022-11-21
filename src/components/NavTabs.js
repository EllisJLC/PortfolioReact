import React from 'react';

const styles = {
  navbarStyle: {
    background: '#5386E4',
    justifyContent: 'flex-end',
  },
  headerStyle: {
    background: '#5386E4',
    float:"left"
  },
  setStyle: {
    flexdirection: "row",
  },
  imgStyle: {
    maxWidth: "19px",
    display: "flex",
    flexdirection: "row",
  },
  headerLink: {
    display: "flex",
    color: "#2A2B2A",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  
  return (
    <section style={styles.setStyle} id="navbarHeader">
      <ul className="nav nav-tabs" style={styles.navbarStyle}>
        <div className='d-flex'>
          <li className="nav-item">
              <a
                href="/"
                onClick={() => handlePageChange('Home')}
                className='nav-link active1' style={styles.headerLink}
              >
                Jia Liang Chen
              </a>
          </li>
          </div>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active1' : 'nav-link colour-black'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active1' : 'nav-link colour-black'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active1' : 'nav-link colour-black'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active1' : 'nav-link colour-black'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active1' : 'nav-link colour-black'}
          >
            Resume
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavTabs;
