import React from 'react';
import SafeEmoji from './SafeEmoji';

/**
 * This component is a basic clock which will update every second
 * to display the current time
 */
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick = () => this.setState({ time: new Date() });

  render() {
    return (
      <div className="App">
        <h1>
          Hallo React vriendjes!
          {' '}
          <SafeEmoji emoji="🙋🏼‍♂️" />
        </h1>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
