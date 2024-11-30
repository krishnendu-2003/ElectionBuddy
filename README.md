# ElectionBuddy

Here’s a sample README for my project named as QuestLearn:

---

# Description

Election Buddy is a decentralised voting portal. With the use of the Linea chain, candidates can find it safe to vote here, because of the security that this blockchains promises to its users .
Liner

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MetaMask](https://metamask.io/) browser extension
- [Hardhat](https://hardhat.org/) for deploying smart contracts
  ### Installation

1. **Clone the Repository**

   ```bash
   fork the repo
   git clone https://github.com/krishnendu-2003/ElectionBuddy
   cd client
   ```
2. **Install Dependencies**

   ```bash
   npm install
   ```
3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your MetaMask private key:

   ```env
   ACCOUNT_PRIVATE_KEY='your-private-key'
   ```

4. **Compile Smart Contracts**

   ```bash
   npx hardhat compile
   ```

5. **Deploy Smart Contracts**

   ```bash
   npx hardhat run scripts/deploy.js --network opencampus
   ```
   
### Usage

1. **Start the Frontend**

   ```bash
   cd client
   npm start
   ```

2. **Access the Application**

   Open your browser and go to `http://localhost:3000`. Connect your MetaMask wallet to interact with the voting system.

## Smart Contract ABI

Ensure that the ABI is correctly configured in your frontend application. Example ABI is available in `src/abi/VotingContract.json`.
## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or further information, please contact [skrishnendu115@gmail.com](mailto:your-email@example.com).

---

## Preview 
After `npm start `

<!-- ![1st image](https://github.com/krishnendu-2003/QuestLearn/blob/main/1.png) -->

Complete modules may look like

<!-- ![2nd image](https://github.com/krishnendu-2003/QuestLearn/blob/main/2.png) -->

