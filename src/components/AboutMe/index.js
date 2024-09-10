import React from 'react';
import educationPhoto from '../../images/educationPhoto.png';
import Button from '../Button';
import classNames from 'classnames';
import s from './index.module.css';

export default function AboutMe() {
  return (
    <div className={classNames(s.wrapperEducation, 'container')}>
      <div className={s.photoContainer}>
        <img alt="photo_about_me" src={educationPhoto} />
      </div>
      <div className={s.textContainer}>
        <h2 className={s.title}>Костюк Максим</h2>
        <span className={s.description}>
          Три вищі освіти, магістр сімейної психології, професійний коуч .
          Одружений , щасливий чоловік, батько 4 дітей, автор книги “Mental
          health-road to happiness”, прихильник здорового способу життя,
          щоденних занять спортом, саморозвитку і усвідомленого мислення. У
          роботі використовує сучасні методики та індивідуальний підхід до
          кожного клієнта.
        </span>
        <Button className={s.btnSignUp} text={<span>Зареєстуватись</span>} />
      </div>
    </div>
  );
}
