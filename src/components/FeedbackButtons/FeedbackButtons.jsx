import { Button, ButtonsList } from './FeedbackButtons.styled';

export const FeedbackButtons = ({ onClick }) => {
  return (
    <ButtonsList>
      <li>
        <Button type="button" name="good" onClick={e => onClick(e.target.name)}>
          Good
        </Button>
      </li>
      <li>
        <Button
          type="button"
          name="neutral"
          onClick={e => onClick(e.target.name)}
        >
          Neutral
        </Button>
      </li>
      <li>
        <Button type="button" name="bad" onClick={e => onClick(e.target.name)}>
          Bad
        </Button>
      </li>
    </ButtonsList>
  );
};
