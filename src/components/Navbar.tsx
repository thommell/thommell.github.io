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
        <div style={styles.home}>
          <button onClick={() => onScrollTo('section1')}>Home</button>
        </div>
        <div style={styles.burgerHorizontal}>
          <button onClick={() => onScrollTo('section2')}>Projects</button>
        </div>
        <div style={styles.burgerHorizontal}>
          <button onClick={() => onScrollTo('section3')}>Skills</button>
        </div>
        <div style={styles.burgerHorizontal}>
          <button onClick={() => onScrollTo('section4')}>Contact Me</button>
        </div>
      </nav>
  );
};
const styles: { nav: CSSProperties, nameInNav: CSSProperties, home: CSSProperties, burgerHorizontal: CSSProperties} = {
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'lightgray',
    zIndex: 1000,
    height: '2%',
    display: 'flex',
    outline: '2px solid black',
    textAlign: "center",
  },
  nameInNav: {
  },
  home:{
    display: 'flex',
    marginLeft: '50%',
    justifyContent: 'center',
  },
  burgerHorizontal: {
    display: 'flex',
    paddingLeft: '2px',
    justifyContent: 'center',
  }
};



export default Navbar;
