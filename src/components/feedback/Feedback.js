import { useState } from 'react';
import { Box } from './Feedback.styled';
import { Button, ButtonsList } from './Feedback.styled';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => {
    setGood(state => state + 1);
  };
  const onNeutralClick = () => {
    setNeutral(state => state + 1);
  };
  const onBadClick = () => {
    setBad(state => state + 1);
  };
  const total = good + bad + neutral;
  const countPositiveFeedbackPercentage = () => {
    const result = parseFloat((good / (neutral + bad + good)) * 100).toFixed(2);
    return Number.isNaN(result) ? null : result;
  };
  const totalPercentage = countPositiveFeedbackPercentage();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Section title="Please, leave your feedback">
        <ButtonsList>
          <li>
            <Button type="button" onClick={onGoodClick}>
              Good
            </Button>
          </li>
          <li>
            <Button type="button" onClick={onNeutralClick}>
              Neutral
            </Button>
          </li>
          <li>
            <Button type="button" onClick={onBadClick}>
              Bad
            </Button>
          </li>
        </ButtonsList>
      </Section>
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
