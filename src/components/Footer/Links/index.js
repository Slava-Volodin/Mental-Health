import React from 'react';

import Whats from '../../../images/icons/Whats.png';
import Instagram from '../../../images/icons/Instagram.png';
import Telegram from '../../../images/icons/Telegram.png';
import TikTok from '../../../images/icons/Tik tok.png';

import s from '../index.module.css';

export default function Links() {
  return (
    <ul className={s.links}>
      <li>
        <a href="https://wa.me/491606039906?text=Привет,%20хочу%20узнать%20больше%20о%20ваших%20услугах">
          <img alt="watsup_icon" src={Whats} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/maksym_kostyuk_?igsh=eWhmMnA0NzdlOXM1&utm_source=qr">
          <img alt="" src={Instagram} />
        </a>
      </li>
      <li>
        <a href="https://t.me/MaxymKostyuk">
          <img alt="telegram_icon" src={Telegram} />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/uk-UA/">
          <img alt="tiktok_icon" src={TikTok} />
        </a>
      </li>
    </ul>
  );
}
