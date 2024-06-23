import { formatter } from '../util/investment';

export default function Results({ results }) {
  let totalInterest = 0;

  return (
    <table id='result'>
      <thead>
        <tr>
          <td>Year</td>
          <td>Investement Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          totalInterest += result.interest;

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(result.valueEndOfYear - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
