import React from 'react';
import classNames from 'classnames';
import Timer from '../Timer';

import CardPrice from '../../components/CardPrice';

import s from './index.module.css';

// import s from './index.module.css';

export default function Action() {
  return (
    <div className={classNames('container', s.actionWrapper)}>
      <CardPrice />
      <Timer />
    </div>
  );
}
