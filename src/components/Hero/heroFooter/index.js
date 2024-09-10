import React from 'react';
import { ReactComponent as MentalHealth } from '../../../images/icons/mentalHealth.svg';

import classNames from 'classnames';
import s from '../index.module.css';

export default function HeroFooter() {
  return (
    <div className={classNames(s.wrapperHeroFooterContainer)}>
      <div className={classNames('container', s.heroFooterContainer)}>
        <span className={s.titleHeroFooter}>приєднуйся та прокачай себе</span>

        <MentalHealth className={s.btnFooterContainer} />
      </div>
    </div>
  );
}
