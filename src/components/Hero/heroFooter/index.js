import React from 'react';
import classNames from 'classnames';
import { useBreakpoints } from '../../../utils/hooks/useBreakpoints';
import Button from '../../Button';

import { ReactComponent as MentalHealth } from '../../../images/icons/mentalHealth.svg';
import { ReactComponent as ArrowDown } from '../../../images/icons/arrowDown.svg';
import logoWhite from '../../../images/hero/logoWhite.png';
import s from './index.module.css';

export default function HeroFooter({ openModal }) {
  const { isMobile } = useBreakpoints();

  return (
    <div className={classNames(s.wrapperHeroFooterContainer)}>
      <div className={classNames('container', s.heroFooterContainer)}>
        <span className={s.titleHeroFooter}>приєднуйся та прокачай себе</span>

        <div
          className={classNames(s.btnFooterContainer, {
            [s.mobLogo]: isMobile,
          })}
        >
          {isMobile && (
            <>
              <ArrowDown />
              <img alt="logo_white" src={logoWhite} />
              <Button
                onClick={openModal}
                className={s.btnSignUp}
                text={<span>Зареєстуватись</span>}
              />
            </>
          )}
          {!isMobile && <MentalHealth />}
        </div>
        <Button
          onClick={openModal}
          className={classNames(s.btnSignUp, s.btnSignUpLandscape)}
          text={<span>Зареєстуватись</span>}
        />
      </div>
    </div>
  );
}
