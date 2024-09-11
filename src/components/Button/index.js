import React from 'react';
import s from './index.module.css';
import classNames from 'classnames';

export default function Button({ text, onClick, className }) {
  return (
    <button
      className={classNames(s.button, { [className]: className })}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
