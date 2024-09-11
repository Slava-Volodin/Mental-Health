import React from 'react';
import classNames from 'classnames';

import s from './index.module.css';

import Links from './Links';
import Action from '../Action';

import mental from '../../images/mental.png';
import { useBreakpoints } from '../../utils/hooks/useBreakpoints';

export default function Footer() {
  const { isMobile } = useBreakpoints();
  return (
    <div className={s.footerSectionWrapper}>
      <div className={classNames('container', s.footerSection)}>
        {!isMobile && (
          <>
            <div className={s.footerTitle}>
              <img src={mental} />
            </div>
            <Links />
          </>
        )}
        <div>
          <Action theme="dark" />
        </div>
        <div className={s.footerBottom}>
          <div>
            <span className={s.footerSpan}>
              ГО "Ментальні зміни суспільства"
            </span>
          </div>
          {isMobile && (
            <div className={s.footerTitleMob}>
              <img src={mental} />
            </div>
          )}
          <Links />
        </div>
      </div>
    </div>
  );
}
