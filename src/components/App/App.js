import React from 'react';

import './App.css';
import Section from '../Section/Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    this.setState(prevState => {
      const total = prevState.good + prevState.neutral + prevState.bad;
      return { total };
    });
    // this.countPositiveFeedbackPercentage();
  };
  handleIncrementButton = ({ target }) => {
    const { option } = target;
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    this.countTotalFeedback();
  };

  // countPositiveFeedbackPercentage();

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.fbIncrement}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            // total={this.state.total}
            // positivePercentage={this.state.positivePercentage}
          ></Statistics>
          <Notification message="No feedback given"></Notification>
        </Section>
      </>
    );
  }
}
export default App;
