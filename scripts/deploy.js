const hre = require("hardhat");

async function main() {

  // Deploy the contract
  const HashCertificate = await hre.ethers.getContractFactory("HashCertificate");
  const hashCertificate = await HashCertificate.deploy();

  const contractAddress = (await hashCertificate.deployTransaction.wait()).contractAddress;

  console.log("Contract deployed to:", contractAddress);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
