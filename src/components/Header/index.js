import React from 'react';
import logo from '../../images/logo.png';
import { useBreakpoints } from '../../utils/hooks/useBreakpoints';
import s from './index.module.css';
import classNames from 'classnames';

export default function Header() {
  const { isMobile } = useBreakpoints();
  return (
    <>
      {!isMobile && (
        <div className={classNames('container', s.header)}>
          <img alt="logo_icon" src={logo} className={s.logo} />
        </div>
      )}
    </>
  );
}
