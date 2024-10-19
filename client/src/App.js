import React, { useState } from 'react';
import './App.css';

function App() {
  const [votes, setVotes] = useState({
    candidate1: 0,
    candidate2: 0,
    candidate3: 0
  });

  const handleVote = (candidate) => {
    setVotes({
      ...votes,
      [candidate]: votes[candidate] + 1
    });
  };

  return (
    <div className="App">
      <h1>Voting System</h1>
      <div className="candidates">
        <div className="candidate">
          <h3>Candidate 1</h3>
          <p>Votes: {votes.candidate1}</p>
          <button onClick={() => handleVote('candidate1')}>Vote</button>
        </div>

        <div className="candidate">
          <h3>Candidate 2</h3>
          <p>Votes: {votes.candidate2}</p>
          <button onClick={() => handleVote('candidate2')}>Vote</button>
        </div>

        <div className="candidate">
          <h3>Candidate 3</h3>
          <p>Votes: {votes.candidate3}</p>
          <button onClick={() => handleVote('candidate3')}>Vote</button>
        </div>
      </div>
      <div className="results">
        <h2>Current Leader</h2>
        <p>
          {Math.max(votes.candidate1, votes.candidate2, votes.candidate3) === votes.candidate1
            ? "Candidate 1"
            : Math.max(votes.candidate1, votes.candidate2, votes.candidate3) === votes.candidate2
            ? "Candidate 2"
            : "Candidate 3"}
        </p>
      </div>
    </div>
  );
}

export default App;
