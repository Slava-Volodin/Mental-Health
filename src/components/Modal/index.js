import React from 'react';
import s from './index.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      {children}
    </div>
  );
};

export default Modal;
