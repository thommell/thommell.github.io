import React, { useRef } from 'react';
import Body, { BodyHandle, SectionId } from './components/Body'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  const bodyRef = useRef<BodyHandle>(null); 

  const handleScroll = (id: SectionId) => {
    bodyRef.current?.scrollToSection(id);
  };

  return (
    <div className="App">
      <Navbar onScrollTo={handleScroll} />
      <Body ref={bodyRef} />
      <Footer />
    </div>
  );
};

export default App;
