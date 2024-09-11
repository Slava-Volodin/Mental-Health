import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RoadForWhom from './components/RoadForWhom';
import AboutMe from './components/AboutMe';
import Questions from './components/Questions';
import Footer from './components/Footer';

import { useBreakpoints } from './utils/hooks/useBreakpoints';
import classNames from 'classnames';

import Action from './components/Action';

function App() {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  const classNameDevice = classNames({ isMobile }, { isTablet }, { isDesktop });

  return (
    <div className={classNameDevice}>
      <Header />
      <Hero />

      <RoadForWhom />
      <AboutMe />
      <Questions />

      <RoadForWhom />
      <AboutMe />
      <Action />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
