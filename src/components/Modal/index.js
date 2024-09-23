import React from 'react';
import s from './index.module.css';
import classNames from 'classnames';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={classNames(s.modalOverlay, {
        [s.show__modal]: isOpen,
      })}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default Modal;
