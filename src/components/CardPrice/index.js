import React from 'react';
import Button from '../Button';

import money from '../../images/money.png';
import moneyBlack from '../../images/moneyBlack.png';

import s from './index.module.css';
import classNames from 'classnames/bind';

export default function CardPrice({ theme, openModal, className }) {
  return (
    <div
      className={classNames(s.card, {
        [s[theme]]: theme,
        [className]: className,
      })}
    >
      {theme === 'light' && (
        <img alt="money_icon" className={s.cardPrice} src={moneyBlack} />
      )}
      <span className={s.cardTitle}>
        ПРИЄДНУЙТЕСЬ ДО Діагностики з психологом Костюком Максимом, ВЖЕ ЗАРАЗ,
        ЗА СПЕЦІАЛЬНОЮ та ОБМЕЖЕНОЮ У ЧАСІ ПРОПОЗИЦІЄЮ
      </span>
      {theme !== 'light' && (
        <img alt="money_icon" className={s.cardPrice} src={money} />
      )}
      <Button
        onClick={openModal}
        className={s.cardBtn}
        text={<span>Зареєструватись</span>}
      />
    </div>
  );
}
