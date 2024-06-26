import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, onReset },
  ref
) {
  const userLost = timeRemaining <= 0;
  const polishedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  return (
    <dialog ref={ref} className='result-modal' onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{polishedTimeRemaining} seconds left.</strong>
      </p>
      <form method='dialog'>
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
