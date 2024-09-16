import React from 'react';
import classNames from 'classnames';

import Button from '../Button';

import contactImg from '../../images/contactImages/contactImg.png';
import mobHero from '../../images/contactImages/mobHero.png';
import closeBtn from '../../images/icons/Close.png';
import s from './index.module.css';
import { useBreakpoints } from '../../utils/hooks/useBreakpoints';

export default function ContactModal({ onClose }) {
  const { isMobile } = useBreakpoints();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={classNames('container', s.contactWrapper)}
    >
      <div className={s.formWrapper}>
        <form className={s.form}>
          <label className={s.label}>
            <input type="name" placeholder="Ім’я" />
          </label>
          <label className={s.label}>
            <input type="tel" placeholder="Номер телефону" />
          </label>
          <label className={s.label}>
            <input type="email" placeholder="Пошта" />
          </label>
          <Button type="submit" text="Отримати" />
        </form>
      </div>
      <div className={s.contactHero}>
        {isMobile && (
          <img alt="photo_mob" className={s.mobHero} src={mobHero} />
        )}
        <img alt="contact_img" className={s.contactImg} src={contactImg} />
        <div className={s.descriptionWrapper}>
          <span className={s.discription}>
            Отримайте професійний аналіз вашого психологічного стану та життя,
            покроковий план дій якій дасть
          </span>
          <span className={s.subDiscription}>
            можливість змінити вашу ситуацію і життя вже сьогодні{' '}
          </span>
        </div>
      </div>
      <button onClick={onClose} type="button" className={s.closeBtn}>
        <img src={closeBtn} />
      </button>
    </div>
  );
}
