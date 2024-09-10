import React from 'react';
import logo from '../../images/logo.png';
import s from './index.module.css';

export default function Header() {
  return (
    <div className="container">
      <img alt="logo_icon" src={logo} className={s.logo} />
    </div>
  );
}
