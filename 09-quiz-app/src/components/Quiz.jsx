import { useCallback, useState } from 'react';
import questions from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

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

  const shuffledAnswers = [...questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
      <div id='questions'>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={3000}
          onTimeout={handleSkipAnswer}
        />

        <h2>{questions[activeQuestionIndex].text}</h2>

        <ul id='answers'>
          {shuffledAnswers.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => handleSelect(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
