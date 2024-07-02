import { useState } from 'react';
import questions from '../questions';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelect(selectedAnswer) {
    setUserAnswers((prevValues) => [...prevValues, selectedAnswer]);
  }

  return (
    <div id='quiz'>
      <div id='questions'>
        <h2>{questions[activeQuestionIndex].text}</h2>

        <ul id='answers'>
          {questions[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => handleSelect(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
