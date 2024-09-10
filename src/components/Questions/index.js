import React, { useState } from 'react';
import { questionsData } from '../../data/questions';
import QuestionCard from './components/questionCard';
import classNames from 'classnames';

import s from './index.module.css';

export default function Questions() {
  const [questions, setQuestions] = useState(questionsData);

  const handleClick = (id) => {
    setQuestions((prevState) =>
      prevState.map((el) =>
        el?.id === id ? { ...el, isOpen: !el.isOpen } : el,
      ),
    );
  };

  return (
    <div className={classNames('container', s.wrapperQuestions)}>
      <div className={s.photoContainer}>Road to happyness</div>
      <div className={s.listWrapper}>
        <ul className={s.listContainer}>
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              {...question}
              handleClick={handleClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
