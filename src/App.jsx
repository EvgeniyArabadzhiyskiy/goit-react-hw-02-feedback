import { Component } from 'react';

import Container from 'components/Container/Container';
import Section from 'components/Feedback/Section/Section';
import Notification from 'components/Feedback/Notification/Notification';
import Statistics from 'components/Feedback/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackBtnClick = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  getStateEntries = () => {
    const { state } = this;
    return Object.entries(state);
  };

  countTotalFeedback = () => {
    return this.getStateEntries().reduce((acc, value) => acc + value[1], 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { state } = this;
    return Math.round(100 / (this.countTotalFeedback() / state.good));
  };

  render() {
    return (
      <div>
        <Container>
          <Section title="Please leave feedback" />
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onFeedbackBtnClick}
          />

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
        </Container>
      </div>
    );
  }
}

export default App;
