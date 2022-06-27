import PropTypes from 'prop-types';
import { StatisticContainer, StatisticText } from './Statistics.styled';

const Statistics = ({  totalFeedback, positiveFeedback }) => {
  return (
    <StatisticContainer>
     

      <StatisticText>Total Feedbacks: {totalFeedback}</StatisticText>

      <StatisticText>
        Positive Feedback: {positiveFeedback}%
      </StatisticText>
    </StatisticContainer>
  );
};

Statistics.propTypes = {
  stateEntries: PropTypes.arrayOf(PropTypes.array).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
