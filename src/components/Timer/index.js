import React from 'react';
import s from './index.module.css';

export default function Timer() {
  return (
    <div className={s.timerWrapper}>
      <h3 className={s.timerTitle}>ДО ЗАКІНЧЕННЯ АКЦІЇ ЗАЛИШИЛОСЬ:</h3>
      <div className={s.timerNumber}>
        <div></div>
      </div>
      <span className={s.timerDescription}>
        Запишіться на безкоштовну діагностику від Костюка Максима
      </span>
      <span className={s.timerSubDescription}>
        Отримайте професійний аналіз вашого психологічного стану та життя,
        покроковий план дій якій дасть
      </span>
      <span className={s.timerDescription}>
        можливість змінити вашу ситуацію і життя вже сьогодні
      </span>
    </div>
  );
}
