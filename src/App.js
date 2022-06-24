import { Component } from 'react';


import Feedback from 'components/Feedback/Feedback';
import Container from 'components/Container/Container';
import ColorPicker from 'components/ColorPicker/ColorPicker';



const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];




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
        <Container >

          <ColorPicker options={colorPickerOptions} />

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
