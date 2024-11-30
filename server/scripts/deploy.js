const hre = require("hardhat");

async function main() {
  // Deploy the RewardContract
  const deployedContract = await hre.ethers.deployContract("VotingContract");

  // Wait for the deployment to be mined
  await deployedContract.waitForDeployment();

  // Log the deployed contract address
  console.log(`VotingContract deployed to ${deployedContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
