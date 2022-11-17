import React from 'react';
import image from "../resources/logoJLC.png"
// import Navbar from './Navbar';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

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
    color: "#2A2B2A"
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  
  return (
    <section style={styles.setStyle}>
      <ul className="nav nav-tabs" style={styles.headerStyle}>
      <li className="nav-item">
          <a
            href="/"
            onClick={() => handlePageChange('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className='nav-link active1' style={styles.headerLink}
          >
            <img src={image} alt="JLC Logo" style={styles.imgStyle}/>
            Welcome!
          </a>
        </li>
      </ul>
      <ul className="nav nav-tabs" style={styles.navbarStyle}>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active1' : 'nav-link colour-black'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active1' : 'nav-link colour-black'}
          >
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavTabs;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

// import {
//   AppstoreOutlined,
//   ContainerOutlined,
//   DesktopOutlined,
//   MailOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   PieChartOutlined,
// } from '@ant-design/icons';
// import { Button, Menu } from 'antd';
// import React, { useState } from 'react';
// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('Option 3', '3', <ContainerOutlined />),
// ];
// const NavTabs = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };
//   return (
//     <div
//       style={{
//         width: 256,
//       }}
//     >
//       <Button
//         type="primary"
//         onClick={toggleCollapsed}
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//       </Button>
//       <Menu
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         theme="dark"
//         inlineCollapsed={collapsed}
//         items={items}
//       />
//     </div>
//   );
// };
// export default NavTabs;
