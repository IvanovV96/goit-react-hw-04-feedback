import PropTypes from 'prop-types';
import { NotificationEl } from './Feedback.styled';

export const Notification = ({ message }) => {
  return (
    <NotificationEl>
      <p>{message}</p>
    </NotificationEl>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
