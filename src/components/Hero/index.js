import React from 'react';
import classNames from 'classnames';
import photo from '../../images/hero/photo.png';
import HeroFooter from './heroFooter';
import Button from '../Button';
import { useBreakpoints } from '../../utils/hooks/useBreakpoints';

import s from './index.module.css';

export default function Hero() {
  const { isMobile } = useBreakpoints();
  return (
    <div>
      <div className={classNames('container', s.heroContainer)}>
        <div className={s.infoSide}>
          <div className={s.titlesWrapper}>
            <h1 className={s.title}>діагностика</h1>
            <h2 className={s.subTitle}>від психолога</h2>
          </div>
          <div className={s.textContainer}>
            <h3 className={s.infoTitle}>
              Отримайте безоплатну діагностику від психолога
            </h3>
            <span className={s.heroText}>
              проаналізуйте свій поточний стан, своє життя і діі.
            </span>
          </div>
          {!isMobile && (
            <Button className={s.btnSignUpDesktop} text="Зареєстуватись" />
          )}
        </div>
        <div className={s.imgSide}>
          <img alt="photo_background" className={s.photo} src={photo} />
          <div className={s.designTextBg}>NEVER GIVE UP</div>
        </div>
      </div>
      <HeroFooter />
    </div>
  );
}
