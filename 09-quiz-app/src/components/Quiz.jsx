import { useCallback, useState } from 'react';
import questions from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex === questions.length;

  const handleSelect = useCallback(function handleSelect(selectedAnswer) {
    setUserAnswers((prevValues) => [...prevValues, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelect(null),
    [handleSelect]
  );

  if (isQuizComplete) {
    return (
      <div id='summary'>
        <img src={quizCompleteImg} alt='Colorful trophy' />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelect}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
