import { Component } from 'react';

import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const {
      state: { good, neutral, bad },
    } = this;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const {
      state: { neutral, bad },
    } = this;

    const total = this.countTotalFeedback();
    return Math.round(((total - neutral / 2 - bad) / total) * 100);
  };

  render() {
    const {
      state: { good, neutral, bad },
    } = this;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            handleClick={this.onLeaveFeedback}
          />
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
