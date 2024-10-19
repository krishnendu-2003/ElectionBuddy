// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
   
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;

    mapping(address => bool) public voters;

    uint public candidatesCount;

    event VotedEvent(uint indexed candidateId);

    constructor() {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
        addCandidate("Candidate 3");
    }

    function addCandidate(string memory name) internal {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }

    function vote(uint candidateId) public {
        require(!voters[msg.sender], "You have already voted");

        require(candidateId > 0 && candidateId <= candidatesCount, "Invalid candidate ID");

        voters[msg.sender] = true;

        candidates[candidateId].voteCount++;

        emit VotedEvent(candidateId);
    }

    function getVotes(uint candidateId) public view returns (uint) {
        require(candidateId > 0 && candidateId <= candidatesCount, "Invalid candidate ID");
        return candidates[candidateId].voteCount;
    }

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
