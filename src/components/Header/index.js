import React from 'react';
import logo from '../../images/logo.png';
import s from './index.module.css';
import { useBreakpoints } from '../utils/hooks/useBreakpoints';

export default function Header() {
  const { isDesktop } = useBreakpoints();
  console.log(isDesktop);

  return (
    <div className="container">
      <img alt="logo_icon" src={logo} className={s.logo} />
    </div>
  );
}
