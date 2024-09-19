import React from 'react';
import classNames from 'classnames';

import s from './index.module.css';

export default function Reviews() {
  return (
    <div className={classNames('container', s.revWrapper)}>
      <div className={s.titleWrapper}>
        <span className={s.title}>відгуки</span>
        <span className={s.subTitle}>пройшовших діагностику</span>
      </div>
      <span className={s.titleSpan}>
        become a <br></br>lifestyle
      </span>
    </div>
  );
}
