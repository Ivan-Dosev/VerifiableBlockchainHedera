const hre = require("hardhat");
require('dotenv').config();

async function main() {

    const contractAddr = process.env.CONTRACT_ADDRESS;

    // Load the Contract
    const HashCertificate  = await hre.ethers.getContractFactory("HashCertificate");
    const hashCertificate  = HashCertificate.attach(contractAddr);

    const setMessage   = await hashCertificate.setHash("c440b5ed979170b8d129017c38bdb94819abfb8d23894d7209ceefffdc0fb748");

    //const setMessage   = await hashCertificate.setCertificate("TU", "Apr");

    console.log("Set Certificate : ", setMessage);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
