import { Component } from 'react';

import Feedback from 'components/Feedback/Feedback';
import Container from 'components/Container/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackBtnClick = evt => {
    const feedback = evt.target.dataset.feedback;

    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Feedback
            state={this.state}
            onLeaveFeedback={this.onFeedbackBtnClick}
          />
        </Container>
      </div>
    );
  }
}

export default App;
