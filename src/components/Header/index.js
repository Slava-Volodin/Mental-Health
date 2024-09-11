import React from 'react';
import logo from '../../images/logo.png';
import { useBreakpoints } from '../../utils/hooks/useBreakpoints';
import s from './index.module.css';

export default function Header() {
  const { isMobile } = useBreakpoints();
  return (
    <>
      {!isMobile && (
        <div className="container">
          <img alt="logo_icon" src={logo} className={s.logo} />
        </div>
      )}
    </>
  );
}
