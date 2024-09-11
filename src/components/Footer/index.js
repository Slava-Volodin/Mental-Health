import React from 'react';
import classNames from 'classnames';

import s from './index.module.css';

import Links from './Links';
import Action from '../Action';

export default function Footer() {
  return (
    <div className={s.footerSectionWrapper}>
      <div className={classNames('container', s.footerSection)}>
        <div>
          <Links />
        </div>
        <div>
          <Action theme="dark" />
        </div>
        <div>
          <Links />
        </div>
      </div>
    </div>
  );
}
