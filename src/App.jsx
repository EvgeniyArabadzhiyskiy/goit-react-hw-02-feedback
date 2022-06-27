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

  

  render() {
    return (
      <div>
        <Container>
          <Section title="Please leave feedback" />
          <FeedbackOptions/>

          <div>
            <Section title="Statistic" />
           
              <Statistics/>
            
              <Notification message="There is no feedback" />
            
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
