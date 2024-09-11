import React from 'react';
import classNames from 'classnames';

import s from './index.module.css';

import Links from './Links';
import Action from '../Action';

import Mental from '../../images/Mental.png';

export default function Footer() {
  return (
    <div className={s.footerSectionWrapper}>
      <div className={classNames('container', s.footerSection)}>
        <div className={s.footerTitle}>
          <img src={Mental}></img>
        </div>
        <Links />
        <div>
          <Action theme="dark" />
        </div>
        <div className={s.footerBottom}>
          <span className={s.footerSpan}>ГО "Ментальні зміни суспільства"</span>
          <Links />
        </div>
      </div>
    </div>
  );
}
