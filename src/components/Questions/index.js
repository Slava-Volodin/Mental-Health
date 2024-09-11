import React, { useState } from 'react';
import { questionsData } from '../../data/questions';
import QuestionCard from './components/questionCard';
import roadtohappyness from '../../images/road/roadtohappyness.png';
import questionPhoto from '../../images/questionPhoto.png';
import classNames from 'classnames';
import Button from '../Button';

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
      <img
        className={s.bgQuestion}
        alt="road_to_question_photo"
        src={questionPhoto}
      />
      <div className={s.roadToHappynessWrapper}>
        <img alt="road_to_happyness_Text" src={roadtohappyness} />
      </div>
      <div className={s.listWrapper}>
        <h2 className={s.titleWrapper}>часті запитання</h2>
        <ul className={s.listContainer}>
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              {...question}
              handleClick={handleClick}
            />
          ))}
        </ul>
        <Button className={s.btnSignUp} text={<span>Зареєстуватись</span>} />
      </div>
    </div>
  );
}
