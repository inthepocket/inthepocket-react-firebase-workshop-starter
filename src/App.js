import React, { Component } from 'react';

/* Data & logic */
import { initFirebase, listenToFirebaseRef, postToFirebaseRef, deleteInFirebaseRef } from './service/firebase';
import generateUniqueId from './utils/uuid';

/* Components & UI */
import './App.css';
import logo from './assets/logo.svg';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: null,
      loading: true,
      id: generateUniqueId(),
    };
  }

  /**
   * Connect to firebase & fill our store with the data in Firebase's Realtime Database
   */
  async componentDidMount() {
    initFirebase();
    listenToFirebaseRef('votes', (votes) => {
      console.log('Votes in reference:', votes);
      this.setState({
        votes,
        loading: false,
      });
    });
  }

  /**
   * Returns the total number of votes, or 'no' if there are no votes (initial state)
   */
  get totalVotes() {
    if (this.state.votes === null) return 'no';
    return Object.keys(this.state.votes).length;
  }

  /**
   * Check if the votes contain your unique id already
   */
  get hasVoted() {
    if (this.state.votes === null) return false;
    return Object.values(this.state.votes).includes(this.state.id);
  }

  /**
   * Check if user has voted:
   * - yes, then remove the vote from Firebase database, state will auto update via firebase listener
   * - no, register a new vote with user's unique ID.
   */
  onHandleVote = async () => {
    if (this.hasVoted) {
      const [firebaseKey] = Object.entries(this.state.votes)
        .find(([_, id]) => id === this.state.id);
      return deleteInFirebaseRef(`votes/${firebaseKey}`);
    }

    return postToFirebaseRef('votes', this.state.id);
  }

  render() {
    return (
      <div className="App">
        <Header logo={logo} title="☀️ ITP Summer Academy — React + Firebase" />
        <div className="App-intro">
          {this.state.loading
            ? <p>🤔 Getting votes from firebase…</p>
            : <p>There are {this.totalVotes} votes!</p>
          }
          <button onClick={this.onHandleVote}>
            {this.hasVoted ? '🙅‍♀️ Unvote' : '✍️ Vote'}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
