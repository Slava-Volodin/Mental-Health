import React from 'react';
import Button from '../Button';

import Money from '../../images/Money.png';

import s from './index.module.css';

export default function CardPrice() {
  return (
    <div className={s.card}>
      <span className={s.cardTitle}>
        ПРИЄДНУЙТЕСЬ ДО Діагностики з психологом Костюком Максимом, ВЖЕ ЗАРАЗ,
        ЗА СПЕЦІАЛЬНОЮ та ОБМЕЖЕНОЮ У ЧАСІ ПРОПОЗИЦІЄЮ
      </span>
      <img className={s.cardPrice} src={Money}></img>
      <Button className={s.cardBtn} text={<span>Зареєструватись</span>} />
    </div>
  );
}
