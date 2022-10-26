import { useState } from 'react';
import { Box } from './Feedback.styled';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { FeedbackButtons } from 'components/FeedbackButtons/FeedbackButtons';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = name => {
    switch (name) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        break;
    }
  };

  const total = good + bad + neutral;
  const countPositiveFeedbackPercentage = () => {
    const result = parseFloat((good / (neutral + bad + good)) * 100).toFixed(2);
    return Number.isNaN(result) ? null : result;
  };
  const totalPercentage = countPositiveFeedbackPercentage();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Section title="Please, leave your feedback"></Section>
      <FeedbackButtons onClick={onClick} />
      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            totalPercentage={totalPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Box>
  );
};
