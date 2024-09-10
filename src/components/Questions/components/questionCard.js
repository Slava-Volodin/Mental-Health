import React from 'react';
import { ReactComponent as Arrow } from '../../../images/icons/arrow.svg';
import s from './index.module.css';

export default function QuestionCard({
  handleClick,
  description,
  isOpen,
  title,
  id,
}) {
  console.log(isOpen, description, id);

  return (
    <li className={s.wrapper}>
      <div onClick={() => handleClick(id)} className={s.titleWrapper}>
        <h3 className={s.title}>{title}</h3>
        <Arrow className={s.arrowIcon} />
      </div>
      {isOpen && <span className={s.description}>{description}</span>}
    </li>
  );
}
