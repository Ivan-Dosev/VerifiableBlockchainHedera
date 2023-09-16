const hre = require("hardhat");
require('dotenv').config();

async function main() {

    const contractAddr = process.env.CONTRACT_ADDRESS;

    // Load the Contract
    const HashCertificate  = await hre.ethers.getContractFactory("HashCertificate");
    const hashCertificate  = HashCertificate.attach(contractAddr);

    const getMessage   = await hashCertificate.getHash();
    //const getMessage   = await hashCertificate.getCerificate("TU","Apr");

    console.log("Certificate Hash: ", getMessage);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
