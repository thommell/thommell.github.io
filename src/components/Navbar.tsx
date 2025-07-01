import React, { CSSProperties, useRef } from 'react';
import {SectionId} from './Body';

interface NavbarProps {
  onScrollTo: (id: SectionId) => void;
}


const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  return (
    <nav style={styles.nav}>
      <div style={styles.nameInNav}>
        <h1>Thom Slaghekke</h1>
      </div>
      <div style={styles.navButtons}>
        <button onClick={() => onScrollTo('section1')}>Home</button>
        <button onClick={() => onScrollTo('section2')}>Projects</button>
        <button onClick={() => onScrollTo('section3')}>Skills</button>
        <button onClick={() => onScrollTo('section4')}>Contact Me</button>
      </div>
    </nav>
  );
};

const styles: {
  nav: CSSProperties;
  nameInNav: CSSProperties;
  navButtons: CSSProperties;
} = {
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'lightgray',
    zIndex: 1000,
    height: '2%',
    display: 'flex',
    outline: '2px solid black',
    justifyContent: 'space-between', // This separates name and buttons
    alignItems: 'center',
    padding: '0 1rem',
  },
  nameInNav: {
    display: 'flex',
    alignItems: 'center',
  },
  navButtons: {
    display: 'flex',
    gap: '1%',
    alignItems: 'center',
  },
};




export default Navbar;
