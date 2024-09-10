import React from 'react';
import classNames from 'classnames';
import photo from '../../images/hero/photo.png';
import HeroFooter from './heroFooter';
import s from './index.module.css';
import Button from '../Button';

export default function Hero() {
  return (
    <div>
      <div className={classNames('container', s.heroContainer)}>
        <div className={s.infoSide}>
          <h1 className={s.title}>діагностика</h1>
          <h2 className={s.subTitle}>від психолога</h2>
          <div className={s.textContainer}>
            <h3 className={s.infoTitle}>
              Отримайте безоплатну діагностику від психолога
            </h3>
            <span className={s.heroText}>
              проаналізуйте свій поточний стан, своє життя і діі.
            </span>
          </div>
          <Button className={s.btn} text="Зареєстуватись" />
        </div>
        <div className={s.imgSide}>
          <img className={s.photo} src={photo} />
        </div>
      </div>
      <HeroFooter />
    </div>
  );
}
