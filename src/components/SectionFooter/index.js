import React from 'react';
import s from '../RoadForWhom/index.module.css';

export default function SectionFooter({ text }) {
  return (
    <div className={s.roadForWhomFooter}>
      <span>{text}</span>
    </div>
  );
}
