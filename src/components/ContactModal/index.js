import React, { useState } from 'react';
import classNames from 'classnames';

import Button from '../Button';

import contactImg from '../../images/contactImages/contactImg.png';
import mobHero from '../../images/contactImages/mobHero.png';
import closeBtn from '../../images/icons/Close.png';
import s from './index.module.css';
import { useBreakpoints } from '../../utils/hooks/useBreakpoints';
import sendToTg from '../../api';

export default function ContactModal({ onClose, isOpen }) {
  const { isMobile } = useBreakpoints();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorsTg, setErrorsTg] = useState(false);

  const [values, setValues] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onChange = (name, value) => {
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
    setErrors((prev) => {
      return { ...prev, [name]: false };
    });
  };

  const addErrorMessage = (name) => {
    setErrors((prev) => {
      return { ...prev, [name]: true };
    });
  };

  const onSubmit = async () => {
    const isValidEmail = emailRegex.test(values?.email);
    if (!isValidEmail) {
      addErrorMessage('email');
    }
    if (!values?.name) {
      addErrorMessage('name');
    }
    if (!values?.phone) {
      addErrorMessage('phone');
    }

    if (isValidEmail && !!values?.name && !!values?.phone) {
      setLoading(true);
      try {
        const resp = await sendToTg({
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: values,
        });
        if (resp.status !== 200) {
          throw resp;
        } else {
          setLoading(false);
          setValues({ name: '', email: '', phone: '' });
          setSuccess(true);
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
        setValues({ name: '', email: '', phone: '' });
        setErrorsTg(true);
      }
    }
  };

  const errorMessage = (massage, visible) => {
    return visible && <span className={s.errorphone}>{massage}</span>;
  };

  return (
    <div
      style={{ justifyContent: success ? 'center' : 'inherit' }}
      onClick={(e) => e.stopPropagation()}
      className={classNames('container', s.contactWrapper, {
        [s.show]: isOpen,
      })}
    >
      <div
        style={{ alignItems: success ? 'center' : 'inherit' }}
        className={s.formWrapper}
      >
        {!success ? (
          <form className={s.form}>
            <label className={s.label}>
              <input
                onChange={(e) => onChange('name', e.target.value)}
                type="name"
                placeholder="Ім’я"
              />
              {errorMessage(`Поле обов'язкове`, errors.name)}
            </label>
            <label className={s.label}>
              <input
                onChange={(e) => onChange('phone', e.target.value)}
                type="tel"
                placeholder="Номер телефону"
              />
              {errorMessage(`Поле обов'язкове`)}
            </label>
            <label className={s.label}>
              <input
                onChange={(e) => onChange('email', e.target.value)}
                type="email"
                placeholder="Пошта"
              />
              {errorMessage(`Поле обов'язкове`)}
            </label>
            <Button
              onClick={onSubmit}
              disabled={loading}
              type="button"
              text="Отримати"
            />
          </form>
        ) : (
          <div
            style={{
              minHeight: '200px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
            }}
            className={s.form}
          >
            <span className={s.successText}>Успішно відправлено!</span>
          </div>
        )}
      </div>
      <div className={s.contactHero}>
        {isMobile && (
          <img alt="photo_mob" className={s.mobHero} src={mobHero} />
        )}
        <img alt="contact_img" className={s.contactImg} src={contactImg} />
        {!success && (
          <div className={s.descriptionWrapper}>
            <span className={s.discription}>
              Отримайте професійний аналіз вашого психологічного стану та життя,
              покроковий план дій якій дасть
            </span>
            <span className={s.subDiscription}>
              можливість змінити вашу ситуацію і життя вже сьогодні{' '}
            </span>
          </div>
        )}
      </div>
      <button onClick={onClose} type="button" className={s.closeBtn}>
        <img alt="close_icon" src={closeBtn} />
      </button>
    </div>
  );
}
