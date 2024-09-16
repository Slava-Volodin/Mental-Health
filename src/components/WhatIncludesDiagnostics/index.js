import React from 'react';
import classNames from 'classnames';
import Timer from '../Timer';

import CardPrice from '../../components/CardPrice';
import logo from '../../images/logo.png';

import s from './index.module.css';
import SectionFooter from '../SectionFooter';

export default function WhatIncludesDiagnostics({ theme, openModal }) {
  console.log(theme);

  return (
    <>
      <div className={classNames('container', s.wrapper)}>
        <CardPrice openModal={openModal} theme="light" />
        <div className={s.generalWrapper}>
          <div className={s.titleWrapper}>
            <h2 className={s.title}>Що включає діагностика: </h2>
            <div className={s.logoWrapper}>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className={s.descriptionWrapper}>
            <h4 className={s.descriptionTitle}>Аналіз вашого стану:</h4>
            <ul>
              <li className={s.descriptionText}>
                Оцінка емоційного, фізіологічного та психологічного стану
                здоровʼя
              </li>
              <li className={s.descriptionText}>
                Визначення проблемних зон в житті
              </li>
              <li className={s.descriptionText}>
                Виявлення основних причин ваших труднощів
              </li>
              <li className={s.descriptionText}>
                Визначення актуальних патернів і установок у вашому мисленні
              </li>
            </ul>
            <h4 className={s.descriptionTitle}>Рекомендації:</h4>
            <div className={s.spanWrapper}>
              <span className={s.descriptionText}>
                Конкретні кроки та поради для покращення вашого стану і змін в
                житті
              </span>
            </div>
          </div>
        </div>
      </div>
      <SectionFooter text="почни змінювати своє життя вже сьогодні" />
    </>
  );
}
