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
        <a href=" ">
          <img src={Whats}></img>
        </a>
      </li>
      <li>
        <a href=" ">
          <img src={Instagram}></img>
        </a>
      </li>
      <li>
        <a href=" ">
          <img src={Telegram}></img>
        </a>
      </li>
      <li>
        <a href=" ">
          <img src={TikTok}></img>
        </a>
      </li>
    </ul>
  );
}
