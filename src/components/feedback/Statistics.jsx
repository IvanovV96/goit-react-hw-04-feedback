export const Statistics = ({ good, bad, neutral, total, totalPercentage }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {!!totalPercentage ? totalPercentage : 0} %</li>
    </ul>
  );
};
