import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  Ref,
  CSSProperties,
} from 'react';

export type SectionId = 'section1' | 'section2' | 'section3' | 'section4';

export interface BodyHandle {
  scrollToSection: (id: SectionId) => void;
}

interface BodyProps {}

const Body = (_: BodyProps, ref: Ref<BodyHandle>) => {
  const thom = "/beterethoom.jpg";

  const sectionRefs = {
    section1: useRef<HTMLDivElement>(null),
    section2: useRef<HTMLDivElement>(null),
    section3: useRef<HTMLDivElement>(null),
    section4: useRef<HTMLDivElement>(null)
  };
  const sectionHeight = '86vh';
  useImperativeHandle(ref, () => ({
  scrollToSection: (id: SectionId) => {
    const element = sectionRefs[id]?.current;
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  },
}));;

const styles: {
  headerImage: CSSProperties;
  titles: CSSProperties;
  sectionContent: CSSProperties;
  projects: CSSProperties;
  imageStyle: CSSProperties;
  caption: CSSProperties;
} = {
  headerImage: {
    width: '300px',
    height: '400px',
    border: '1px solid black',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
    display: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  titles: {
    textAlign: 'center',
    fontSize: '2rem',
    paddingTop: '1rem',
    fontFamily: 'Arial, sans-serif',
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem'
  },
projects: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
},
imageStyle: {
  flex: '1 1 0',
  maxWidth: '575px',
  maxHeight: '450px'
},
caption: {
  textAlign: 'center',
  fontSize: '0.9rem',
  color: '#333',
}
};
return (
  <main>
  {/* Section 1 - Home */}
<div
  ref={sectionRefs.section1}
  style={{ height: sectionHeight, background: 'linear-gradient(to right, #aed6f1  ,  #d6eaf8'}}
>
  <div style={styles.titles}>
    <h2>Home</h2>
  </div>
  <div style={styles.sectionContent}>
    <img src={thom} style={styles.headerImage} alt="ThomasDeBomas" />
    <p style={{ maxWidth: '600px', fontSize: '30px', boxShadow: '20px 5px 15px rgba(1, 0.2, 0, 0.3)'}}>
      Hi, I'm Thom, a passionate developer! Welcome to my personal portfolio.
    </p>
  </div>
</div> 
    {/* Section 2 - Projects */}
    <div
      ref={sectionRefs.section2}
      style={{ height: sectionHeight, background: 'linear-gradient(to right, #f1948a , #fadbd8' }}>
      <div style={styles.titles}>
        <h3>Projects</h3>
        <p style={{fontSize: '15px'}}>Click on an image to go to their respective repositories.</p>
      </div>
      <ul style={{ padding: '1rem' }}>
        <div style={styles.projects}>
          <a href="https://github.com/thommell/recomp2025"><img src="/recomp.png" style={styles.imageStyle} title="Unity reusable component project."/></a>
          <a href="https://github.com/thommell/portfolio_website"><img src="/portfolio.png"style={styles.imageStyle} title="Portfolio Website."/></a>
          <a href="https://github.com/thommell/WonoMame"><img src="/collision.gif"style={styles.imageStyle} title="WonoMane - Unity-component engine in MonoGame."/></a>
        </div>
      </ul>
    </div>

    {/* Section 3 - Skills */}
    <div
      ref={sectionRefs.section3}
      style={{ height: sectionHeight, background: 'linear-gradient(to right, #f7dc6f, #f9e79f' }}
    >
      <div style={styles.titles}>
        <h2>Skills</h2>
      </div>
      <ul style={{ padding: '1rem', fontSize: '20px'}}>
        <li><strong>Languages:</strong> TypeScript, C#</li>
        <li><strong>Frameworks:</strong> React, MonoGame, Unity, .NET, Raylib</li>
        <li><strong>Tools:</strong> Git, Jira, Yarn, Node,</li>
        <li><strong>Soft Skills:</strong> Communication, Time Management, Teamwork</li>
        <li><strong>Deployment:</strong> GitHub Pages</li>
      </ul>
    </div>

    {/* Section 4 - Contact Me */}
    <div
      ref={sectionRefs.section4}
      style={{ height: sectionHeight, background: 'linear-gradient(to right, #7f8c8d, #99a3a4'}}
    >
      <div style={styles.titles}>
        <h2>Contact Me</h2>
      </div>
      <div style={{ padding: '1rem' }}>
        <p>Email: <a href="mailto:thom@example.com">thomslaghekke@outlook.com</a></p>
        <p>GitHub: <a href="https://github.com/thommell" target="_blank">github.com/thommell</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/thom-slaghekke-082764252/" target="_blank">LinkedIn</a></p>
      </div>
    </div>
  </main>
)};

export default forwardRef(Body);