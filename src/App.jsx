import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RoadForWhom from './components/RoadForWhom';
import AboutMe from './components/AboutMe';
import Questions from './components/Questions';
import Footer from './components/Footer';
import HowItWork from './components/HowItWork';
import Carousel from './components/Carousel';
import ContactModal from './components/ContactModal';
import Reviews from './components/Reviews';
import Sales from './components/Sales';

import { useBreakpoints } from './utils/hooks/useBreakpoints';
import classNames from 'classnames';

import IndividualApproach from './components/IndividualApproach';
import WhatIncludesDiagnostics from './components/WhatIncludesDiagnostics';
import Modal from './components/Modal';

function App() {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  const classNameDevice = classNames({ isMobile }, { isTablet }, { isDesktop });
  const [isModalOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={classNameDevice}>
      <Header />
      <Hero openModal={handleClick} />
      <RoadForWhom openModal={handleClick} />

      <AboutMe openModal={handleClick} />
      <WhatIncludesDiagnostics openModal={handleClick} />
      <IndividualApproach openModal={handleClick} />

      <HowItWork openModal={handleClick} />
      <Reviews />
      <Carousel />
      <Sales openModal={handleClick} />
      <Questions openModal={handleClick} />

      <Footer openModal={handleClick} />

      <Modal isOpen={isModalOpen} onClose={handleClick}>
        <ContactModal isOpen={isModalOpen} onClose={handleClick} />
      </Modal>
    </div>
  );
}

export default App;
