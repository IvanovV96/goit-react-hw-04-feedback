import React, { Component } from 'react';
import { Box } from './Feedback.styled';
import { FeedbackButtons } from './FeedbackButtons';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  onLeaveFeedback = e => {
    const option = e.target.textContent.toLowerCase();
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const result = parseFloat((good / (neutral + bad + good)) * 100).toFixed(2);
    return isNaN(result) ? false : result;
  };
  render() {
    const total = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    console.log(!!good);
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Section title="Please, leave your feedback">
          <FeedbackButtons onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {!!{ good } && !!{ neutral } && !!{ bad } ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              totalPercentage={totalPercentage}
            />
          </Section>
        )}
      </Box>
    );
  }
}
export default Feedback;
