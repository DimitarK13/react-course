import { formatter } from '../util/investment';

export default function Results({ results }) {
  let totalInterest = 0;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investement Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
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
