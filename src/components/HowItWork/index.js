import React from 'react';
import classNames from 'classnames';
import rectangle from '../../images/rectangle.png';
import family from '../../images/mobfamily.jpg';
import Button from '../Button';

import s from './index.module.css';

export default function HowItWork({ openModal }) {
  return (
    <div className={classNames('container', s.wrapper)}>
      <img className={s.mobPhoto} alt="bg_orange" src={family} />
      <div className={s.bg}>
        <img className={s.familyPhoto} alt="family_photo" src={rectangle} />
      </div>
      <div className={s.howItWork}>
        <h3 className={s.title}>Як це працює</h3>
        <div className={s.titleCont}>
          <span className={s.subDescription}>
            <b>Заповніть форму:</b> Вкажіть основні дані
          </span>
        </div>
        <div className={s.titleCont}>
          <span className={s.subDescription}>
            <b>Отримайте зворотній зв'язок:</b>
            <br /> Ми зв’яжемося з вами для узгодження <br /> часу консультації
          </span>
        </div>
        <div className={s.titleCont}>
          <span className={s.subDescription}>
            <b>Час консультації</b> - 50 хвилин
          </span>
        </div>
        <span className={s.description}>Консультація безоплатна</span>
      </div>
      <Button
        onClick={openModal}
        className={s.btnSignUp}
        text="Зареєстуватись"
      />
    </div>
  );
}
