import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  Ref,
  CSSProperties,
} from 'react';

export type SectionId = 'section1' | 'section2' | 'section3' | 'section4' | 'recomp' | 'portfolio' | 'wonomane';

export interface BodyHandle {
  scrollToSection: (id: SectionId) => void;
}

interface BodyProps {
  onScrollTo: (id: SectionId) => void;
}

const Body = ({onScrollTo}: BodyProps, ref: Ref<BodyHandle>) => {
  const thom = "/beterethoom.jpg";

  const sectionRefs = {
    section1: useRef<HTMLDivElement>(null),
    section2: useRef<HTMLDivElement>(null),
    section3: useRef<HTMLDivElement>(null),
    section4: useRef<HTMLDivElement>(null),
    recomp: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    wonomane: useRef<HTMLDivElement>(null)
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
  recomp: CSSProperties;
  recompImages: CSSProperties;
  recompContent: CSSProperties;
  recompText: CSSProperties;
  image: CSSProperties;
  videoWrapper: CSSProperties;
  downloadLink: CSSProperties;
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
},
recomp: {
  display: 'flex',
  flexDirection: 'column',
  height: sectionHeight,
  background: 'linear-gradient(to right, #e2ba7c, #eccfa2)',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
},

recompContent: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '40px',
  maxWidth: '800px',
},

recompImages: {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
},
image: {
  width: '500px', 
  height: 'auto',
  borderRadius: '8px',
},
recompText: {
  maxWidth: '400px',
  textAlign: 'left',
  fontSize: '16px',
  lineHeight: '1.6',
},
videoWrapper: {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row'
},
downloadLink: {
  marginTop: '20px',
  textAlign: 'center',
  fontSize: '16px',
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
    <div onClick={() => onScrollTo('recomp')} style={{ cursor: 'pointer' }}>
      <img src="/recomp.png" style={styles.imageStyle} title="Unity reusable component project." />
    </div>
    <div onClick={() => onScrollTo('portfolio')} style={{ cursor: 'pointer' }}>
      <img src="/portfolio.png" style={styles.imageStyle} title="Portfolio Website." />
    </div>
    <div onClick={() => onScrollTo('wonomane')} style={{ cursor: 'pointer' }}>
      <img src="/collision.gif" style={styles.imageStyle} title="WonoMane - Unity-component engine in MonoGame." />
    </div>
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
        <li><strong>Languages:</strong> C#, TypeScript</li>
        <li><strong>Frameworks:</strong> React, MonoGame, Unity, .NET, Raylib</li>
        <li><strong>Tools:</strong> Git, Jira, Yarn, Node</li>
        <li><strong>Soft Skills:</strong> Communication, Time Management, Teamwork, Git Flow</li>
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
        <p>Phone: 06-40104470</p>
      </div>
<div ref={sectionRefs.recomp} style={styles.recomp}>
  <h1>2D Fighting PvP Platformer, made using Unity.</h1>
  <div style={styles.recompContent}>
    <div style={styles.recompImages}>
      <img src="/knockbackapi.png" alt="Knockback API" style={styles.image} />
      <img src="/movementapi.png" alt="Movement API" style={styles.image} />
      <div style={styles.videoWrapper}>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/dPZIZ1nH8fg"
          title="Gameplay Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <a href="/demo.zip" download>
          📥 Download Game Demo (ZIP)
        </a>
        <a href="https://thommell.itch.io/ducky-wucky">
          Go to game page. (LINK)
        </a>
      </div>
    </div>
    <div style={styles.recompText}>
      <p>
        These images showcase how I've built my own entity Unity-framework within my game.
      </p>
      <p>
        Every API call goes through the entity itself, validates it's own call and then sends itself to it's own component.
      </p>
    </div>
      <div style={styles.videoWrapper}>
    </div>
  </div>
</div>
</div>
</main>
)};
export default forwardRef(Body);