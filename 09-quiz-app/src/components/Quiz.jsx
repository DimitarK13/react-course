import { useCallback, useState } from 'react';
import questions from '../questions';
import Question from './Question';
import Summary from './Summary';

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
    return <Summary userAnswers={userAnswers} />;
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
