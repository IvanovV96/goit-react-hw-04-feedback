import { ButtonsList, Button } from './Feedback.styled';

export const FeedbackButtons = ({ onLeaveFeedback }) => {
  return (
    <ButtonsList>
      <li>
        <Button type="button" onClick={onLeaveFeedback}>
          Good
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onLeaveFeedback}>
          Neutral
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onLeaveFeedback}>
          Bad
        </Button>
      </li>
    </ButtonsList>
  );
};
