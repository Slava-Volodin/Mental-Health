import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import s from './index.module.css';

import coment1 from '../../images/coments/coment1.jpg';
import coment2 from '../../images/coments/coment2.jpeg';
import coment3 from '../../images/coments/coment3.jpeg';
import coment4 from '../../images/coments/coment4.jpeg';
import coment5 from '../../images/coments/coment5.jpeg';
import { useBreakpoints } from '../../utils/hooks/useBreakpoints';

export default function Carousel() {
  const { isDesktop, isTablet } = useBreakpoints();
  const slides = [coment1, coment2, coment3, coment4, coment5];
  return (
    <div className={s.carouselWrapper}>
      <CarouselProvider
        naturalSlideWidth={120}
        naturalSlideHeight={100}
        isIntrinsicHeight={true}
        totalSlides={slides.length}
        visibleSlides={isDesktop ? 3 : isTablet ? 2 : 1}
        dragStep={1}
        step={1}
        isPlaying={true}
      >
        <Slider moveThreshold={20} className={s.wrapperSlides}>
          {slides.map((item, idx) => (
            <Slide className={s.imgWrapper} index={idx} key={idx}>
              <img
                alt={`carousel_icon_${idx}`}
                className={s.carouselImg}
                src={item}
              />
            </Slide>
          ))}
        </Slider>
        <div className={s.sliderBtn}>
          <ButtonBack>Попередній</ButtonBack>
          <ButtonNext>наступний</ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}
