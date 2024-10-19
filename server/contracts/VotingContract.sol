// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Structure to store candidate information
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Mapping to store candidates by their ID
    mapping(uint => Candidate) public candidates;

    // Mapping to store whether an address has voted
    mapping(address => bool) public voters;

    // Store the total number of candidates
    uint public candidatesCount;

    // Event triggered when a vote is cast
    event VotedEvent(uint indexed candidateId);

    // Constructor to initialize candidates
    constructor() {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
        addCandidate("Candidate 3");
    }

    // Function to add a candidate (can only be called internally)
    function addCandidate(string memory name) internal {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }

    // Function to vote for a candidate
    function vote(uint candidateId) public {
        // Ensure the sender has not voted before
        require(!voters[msg.sender], "You have already voted");

        // Ensure a valid candidate is selected
        require(candidateId > 0 && candidateId <= candidatesCount, "Invalid candidate ID");

        // Record the vote
        voters[msg.sender] = true;

        // Update the vote count for the candidate
        candidates[candidateId].voteCount++;

        // Trigger the event
        emit VotedEvent(candidateId);
    }

    // Function to get the total votes for a specific candidate
    function getVotes(uint candidateId) public view returns (uint) {
        require(candidateId > 0 && candidateId <= candidatesCount, "Invalid candidate ID");
        return candidates[candidateId].voteCount;
    }

    // Function to get the current leading candidate
    function getLeadingCandidate() public view returns (string memory) {
        uint maxVotes = 0;
        string memory leadingCandidate;

        for (uint i = 1; i <= candidatesCount; i++) {
            if (candidates[i].voteCount > maxVotes) {
                maxVotes = candidates[i].voteCount;
                leadingCandidate = candidates[i].name;
            }
        }

        return leadingCandidate;
    }
}
