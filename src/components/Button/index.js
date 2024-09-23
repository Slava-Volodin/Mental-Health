import React from 'react';
import s from './index.module.css';
import classNames from 'classnames';

export default function Button({ text, onClick, className, disabled }) {
  return (
    <button
      disabled={disabled}
      className={classNames(s.button, { [className]: className })}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
