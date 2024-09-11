import React from 'react';
import classNames from 'classnames';
import RoadForWhomFooter from './RoadForWhomFooter';

import Button from '../Button';

import photo from '../../images/road/photoRoad.png';
import mobPhoto from '../../images/mobPhoto.png';
import s from './index.module.css';
import { useBreakpoints } from '../../utils/hooks/useBreakpoints';

export default function RoadForWhom() {
  const { isMobile } = useBreakpoints();
  const list = [
    'Для кожного хто розуміє як його психологічний стан впливає на результати в житті зараз.',
    'Хто відчуває дискомфорт в житті, має певні проблеми і прагне їх вирішити.',
    'Для тих хто прагне розвитку своєї особистості , покращення себе і свого рівня життя.',
  ];

  return (
    <div>
      <div className={classNames('container', s.roadForWhomWrapper)}>
        <div className={s.leftSide}>
          {!isMobile && (
            <>
              <span className={s.subtitle}>Road</span>
              <h2 className={s.title}>Для кого</h2>
            </>
          )}
          <span className={s.description}>
            Розумієте що ваш психологічний стан і життя може бути кращим ніж
            зараз? Потребуєте професійної допомоги, щоб розібратися у своїх
            емоціях та думках?
          </span>
          <span className={s.toGetTitle}>
            Отримайте безкоштовну діагностику від досвідченого
          </span>
          <span className={s.name}>психолога Костюка Максима</span>

          {!isMobile && (
            <Button
              className={s.btn}
              onClick={() => console.log('click')}
              text={<span className={s.btnText}>Зареєстуватись</span>}
            />
          )}
        </div>
        <div className={s.photoContainer}>
          {isMobile ? (
            // TODO add shadow to photo in mob
            <>
              <img
                alt="photo_background_mob"
                className={s.photo}
                src={mobPhoto}
              />
              <h2 className={classNames(s.title, s.titleMob)}>Для кого</h2>
            </>
          ) : (
            <img alt="photo_background" className={s.photo} src={photo} />
          )}
        </div>
        <div className={s.rightSide}>
          {!isMobile && (
            <span className={classNames(s.subtitle, s.happyness)}>
              happyness
            </span>
          )}
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
