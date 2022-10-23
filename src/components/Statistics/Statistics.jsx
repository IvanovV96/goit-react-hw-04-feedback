import PropTypes from 'prop-types';
import { StatisticsList } from 'components/Statistics/Statistics.styled';

export const Statistics = ({ good, bad, neutral, total, totalPercentage }) => {
  return (
    <StatisticsList>
      <li>
        <p>Good:</p>
        <p>{good}</p>
      </li>
      <li>
        <p>Neutral:</p>
        <p>{neutral}</p>
      </li>
      <li>
        <p>Bad:</p>
        <p>{bad}</p>
      </li>
      <li>
        <p>Total:</p>
        <p>{total}</p>
      </li>
      <li>
        <p>Positive feedback:</p>
        <p>{!!totalPercentage ? totalPercentage : 0} %</p>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
};
