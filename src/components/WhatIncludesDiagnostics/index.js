import React from 'react';
import classNames from 'classnames';
import Timer from '../Timer';

import CardPrice from '../../components/CardPrice';
import logo from '../../images/logo.png';

import s from './index.module.css';
import SectionFooter from '../SectionFooter';

export default function WhatIncludesDiagnostics({ theme }) {
  console.log(theme);

  return (
    <>
      <div className={classNames('container', s.wrapper)}>
        <CardPrice theme="light" />
        <div>
          <div className={s.titleWrapper}>
            <h2 className={s.title}>Що включає діагностика: </h2>
            <div className={s.logoWrapper}>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <SectionFooter text="почни змінювати своє життя вже сьогодні" />
    </>
  );
}
