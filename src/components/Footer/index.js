import React from 'react';
import classNames from 'classnames';

import s from './index.module.css';
import Links from './Links';

export default function Footer() {
  return (
    <div className={s.footerSectionWrapper}>
      <div className={classNames('container', s.footerSection)}>
        <div>
          <Links className={s.Links} />
        </div>
      </div>
    </div>
  );
}
