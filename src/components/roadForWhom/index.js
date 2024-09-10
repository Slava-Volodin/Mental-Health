import React from 'react';
import classNames from 'classnames';
import RoadForWhomFooter from './roadForWhomFooter';

import Button from '../Button';

import photo from '../../images/road/photoRoad.png';
import s from './index.module.css';

export default function RoadForWhom() {
  const list = [
    'Для кожного хто розуміє як його психологічний стан впливає на результати в житті зараз.',
    'Хто відчуває дискомфорт в житті, має певні проблеми і прагне їх вирішити.',
    'Для тих хто прагне розвитку своєї особистості , покращення себе і свого рівня життя.',
  ];
  return (
    <div>
      <div className={classNames('container', s.roadForWhomWrapper)}>
        <div className={s.leftSide}>
          <span className={s.subtitle}>Road</span>
          <h2 className={s.title}>Для кого</h2>
          <span className={s.description}>
            Розумієте що ваш психологічний стан і життя може бути кращим ніж
            зараз? Потребуєте професійної допомоги, щоб розібратися у своїх
            емоціях та думках?
          </span>
          <span className={s.toGetTitle}>
            Отримайте безкоштовну діагностику від досвідченого
          </span>
          <span className={s.name}>психолога Костюка Максима</span>
          <Button
            className={s.btn}
            callback={() => console.log('click')}
            text={<span className={s.btnText}>Зареєстуватись</span>}
          />
        </div>
        <div className={s.photoContainer}>
          <img alt="photo_background" className={s.photo} src={photo} />
        </div>
        <div className={s.rightSide}>
          <span className={classNames(s.subtitle, s.happyness)}>happyness</span>
          <ul className={s.list}>
            {list.map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
          </ul>
        </div>
      </div>
      <RoadForWhomFooter />
    </div>
  );
}
