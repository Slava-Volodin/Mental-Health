import React from 'react';
import Button from '../Button';

import money from '../../images/money.png';
import moneyBlack from '../../images/moneyBlack.png';

import s from './index.module.css';
import classNames from 'classnames/bind';

export default function CardPrice({ theme }) {
  return (
    <div className={classNames(s.card, { [s[theme]]: theme })}>
      {theme === 'light' && <img className={s.cardPrice} src={moneyBlack} />}
      <span className={s.cardTitle}>
        ПРИЄДНУЙТЕСЬ ДО Діагностики з психологом Костюком Максимом, ВЖЕ ЗАРАЗ,
        ЗА СПЕЦІАЛЬНОЮ та ОБМЕЖЕНОЮ У ЧАСІ ПРОПОЗИЦІЄЮ
      </span>
      {theme !== 'light' && <img className={s.cardPrice} src={money} />}
      <Button className={s.cardBtn} text={<span>Зареєструватись</span>} />
    </div>
  );
}
