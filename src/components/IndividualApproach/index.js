import React from 'react';

import { useBreakpoints } from '../../utils/hooks/useBreakpoints';
import photoLife from '../../images/photoLife.png';
import life from '../../images/life.png';

import s from './index.module.css';
import classNames from 'classnames';
import Button from '../Button';

export default function IndividualApproach({ openModal }) {
  const { isDesktop } = useBreakpoints();

  const year = new Date().getFullYear();

  return (
    <div className={classNames('container', s.wrapper)}>
      <div className={s.textWrapper}>
        <h2 className={s.title}>Індивідуальний підхід</h2>
        <span className={s.bold}>
          Кожен клієнт отримує персональну увагу від професійного психолога та
          дієві рекомендації
        </span>

        <span>
          <b>Конфіденційність: </b>Гарантована висока якість послуг
        </span>
        <span>
          <b>Професійність: </b>Ваша інформація залишиться приватною та
          захищеною
        </span>
        <span className={s.bold}>
          Не зволікайте, зробіть перший крок до покращення свого життя вже
          сьогодні!
        </span>
        <Button
          onClick={openModal}
          className={s.button}
          text="Зареєстуватись"
        />
      </div>
      {isDesktop && (
        <div className={s.photoWrapper}>
          <img alt="photo_icon" src={photoLife} />
          <img className={s.lifeIcon} alt="photo_bg" src={life} />

          <div className={s.yearWrapper}>
            <span className={s.year}>{year}</span>
          </div>
        </div>
      )}
    </div>
  );
}
