import React, { useState, useEffect } from 'react';
import s from './index.module.css';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getHours = (time) => {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return hours < 10 ? `0${hours}` : hours;
  };
  const getMinutes = (time) => {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  const getSeconds = (time) => {
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return seconds < 10 ? `0${seconds}` : seconds;
  };

  return (
    <div className={s.timerWrapper}>
      <h3 className={s.timerTitle}>ДО ЗАКІНЧЕННЯ АКЦІЇ ЗАЛИШИЛОСЬ:</h3>
      <div className={s.timerGroup}>
        <div className={s.timerNumber}>{getHours(timeLeft)}</div>
        <div className={s.timerNumber}>{getMinutes(timeLeft)}</div>
        <div className={s.timerNumber}>{getSeconds(timeLeft)}</div>
      </div>
      <span className={s.timerDescription}>
        Запишіться на безкоштовну діагностику від Костюка Максима
      </span>
      <span className={s.timerSubDescription}>
        Отримайте професійний аналіз вашого психологічного стану та життя,
        покроковий план дій якій дасть можливість змінити вашу ситуацію і життя
        вже сьогодні
      </span>
      <span className={s.timerDescription}></span>
    </div>
  );
}
