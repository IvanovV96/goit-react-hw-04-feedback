import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  ButtonsList,
  Button,
} from 'components/FeedbackButtons/FeedbackButtons.styled';

export const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(option => {
        return (
          <li key={option}>
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
