import React from 'react';
import classNames from 'classnames';
import { useBreakpoints } from '../../utils/hooks/useBreakpoints';

import Button from '../Button';
import SectionFooter from '../SectionFooter';

import { ReactComponent as Shadow } from '../../images/icons/shadow.svg';
import photo from '../../images/road/photoRoad.png';
import mobPhoto from '../../images/mobPhoto.png';
import s from './index.module.css';

export default function RoadForWhom({ openModal }) {
  const { isMobile } = useBreakpoints();
  const list = [
    'Для кожного хто розуміє як його психологічний стан впливає на результати в житті зараз.',
    'Хто відчуває дискомфорт в житті, має певні проблеми і прагне їх вирішити.',
    'Для тих хто прагне розвитку своєї особистості , покращення себе і свого рівня життя.',
  ];

  const PhotoComponent = () => {
    return (
      <div className={s.photoContainer}>
        {isMobile ? (
          <>
            <div className={s.imgWrapperMob}>
              <img
                alt="photo_background_mob"
                className={s.photo}
                src={mobPhoto}
              />
              <div className={s.shadow}>
                <Shadow />
              </div>
            </div>
          </>
        ) : (
          <img alt="photo_background" className={s.photo} src={photo} />
        )}
      </div>
    );
  };

  const ForWhom = () => {
    return (
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
            onClick={openModal}
            text={<span className={s.btnText}>Зареєстуватись</span>}
          />
        )}
      </div>
    );
  };

  const ListForWhom = () => {
    return (
      <div className={s.rightSide}>
        {!isMobile && (
          <span className={classNames(s.subtitle, s.happyness)}>happyness</span>
        )}
        {isMobile && (
          <h2 className={classNames(s.title, s.titleMob)}>Для кого</h2>
        )}
        <ul className={s.list}>
          {list.map((el, i) => {
            return <li key={i}>{el}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div className={classNames('container', s.roadForWhomWrapper)}>
        <ForWhom />
        <PhotoComponent />
        <ListForWhom />
      </div>
      <SectionFooter text="зміни в житті починаються із змін мислення" />
    </div>
  );
}
