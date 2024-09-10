import React from 'react';
import s from './index.module.css';
import classNames from 'classnames';

export default function Button({ text, callback, className }) {
  return (
    <button
      className={classNames(s.button, { [className]: className })}
      onClick={callback}
    >
      {text}
    </button>
  );
}
