require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    linea: {
      url: process.env.API_URL,
      chainId: 59141,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};