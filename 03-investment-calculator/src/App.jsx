import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

import { calculateInvestmentResults } from './util/investment';
import { useState } from 'react';

function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

function App() {
  const [data, setData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const dataIsValid = data.duration >= 1;

  function handleUpdate(input, value) {
    setData((prevValues) => {
      return { ...prevValues, [toCamelCase(input)]: Number(value) };
    });
  }

  const res = calculateInvestmentResults(data);

  return (
    <>
      <Header />
      <UserInput onUpdate={handleUpdate} />
      {dataIsValid && <Results results={res} />}
      {!dataIsValid && (
        <p className='center'>Please enter a duration greate than 0</p>
      )}
    </>
  );
}

export default App;
