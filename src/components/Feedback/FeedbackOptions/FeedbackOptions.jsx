import PropTypes from 'prop-types';
import { ButtonBox, Button } from "./FeedbackOptions.styled"

const FeedbackOptions = ({onLeaveFeedback}) => (
    <ButtonBox>
        <Button type="button" data-feedback="good" onClick={onLeaveFeedback}>Good</Button>
        <Button type="button" data-feedback="neutral" onClick={onLeaveFeedback}>Neutral</Button>
        <Button type="button" data-feedback="bad" onClick={onLeaveFeedback}>Bad</Button>
    </ButtonBox>
)

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions 