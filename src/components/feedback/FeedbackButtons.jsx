import _ from 'lodash';
import PropTypes from 'prop-types';
import { ButtonsList, Button } from './Feedback.styled';

export const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {_.capitalize(option)}
            </Button>
          </li>
        );
      })}
    </ButtonsList>
  );
};

FeedbackButtons.propTypes = {
  option: PropTypes.arrayOf({
    option: PropTypes.string,
  }),
  onLeaveFeedback: PropTypes.func,
};
