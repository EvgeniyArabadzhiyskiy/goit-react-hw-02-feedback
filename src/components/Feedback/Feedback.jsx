import { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackWrapper } from './Feedback.styled';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class Feedback extends Component {
  
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    state: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired,
  };

  getStateEntries = () => {
    const { state } = this.props;
    return Object.entries(state);
  };

  countTotalFeedback = () => {
    return this.getStateEntries().reduce((acc, value) => acc + value[1], 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { state } = this.props;
    return Math.round(100 / (this.countTotalFeedback() / state.good));
  };

  render() {
    return (
      <FeedbackWrapper>
        <Section title="Please leave feedback" />
        <FeedbackOptions options={this.props.state} onLeaveFeedback={this.props.onLeaveFeedback} />

        <div>
          <Section title="Statistic" />
          {this.countTotalFeedback() ? (
            <Statistics
              stateEntries={this.getStateEntries()}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </FeedbackWrapper>
    );
  }
}

export default Feedback;
