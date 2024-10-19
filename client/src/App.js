import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import VotingABI from './abi/VotingContract.json'; // Adjust the path to the ABI file in your project
import './App.css';

const CONTRACT_ADDRESS = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8'; // Replace with your deployed contract address

function App() {
  const [votes, setVotes] = useState({
    candidate1: 0,
    candidate2: 0,
    candidate3: 0
  });
  
  const [contract, setContract] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setIsConnected(accounts.length > 0);
        if (accounts.length > 0) {
          // If the wallet is connected, set up the contract
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const _contract = new ethers.Contract(CONTRACT_ADDRESS, VotingABI.abi, signer);
          setContract(_contract);
        }
      }
    };
    checkConnection();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const _contract = new ethers.Contract(CONTRACT_ADDRESS, VotingABI.abi, signer);

        setContract(_contract);
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  const handleVote = async (candidate) => {
    if (!contract) {
      alert('Please connect your wallet first!');
      return;
    }

    try {
      const candidateId = candidate === 'candidate1' ? 1 : candidate === 'candidate2' ? 2 : 3;
      const transaction = await contract.vote(candidateId);
      await transaction.wait();

      setVotes((prevVotes) => ({
        ...prevVotes,
        [candidate]: prevVotes[candidate] + 1
      }));

      console.log(`Voted for candidate ${candidateId}, transaction hash:`, transaction.hash);
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div className="App">
      <h1>Voting System</h1>

      {isConnected ? (
        <p>Wallet Connected</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}

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
