1. Set your ENV file, for example:

ACCOUNT_ID=0.0.1902427
EVM_ADDRESS=0x9e366e524e017ebc7a392f331948ba15d623297c
HEX_PRIVATE_KEY=0x01e11b495cc9802ddbee16189da81f3027e7e1f758dd78ed6a6f436aa4fe9cbd
TESTNET_ENDPOINT="https://testnet.hashio.io/api"
CONTRACT_ADDRESS=0xd96cF83fD2dd85473BF74CBcD0a20c448CEe8062

2. To get the certificate hash
npx hardhat run scripts/getHash.js --network hashio     

3. To store the certificate hash
npx hardhat run scripts/getHash.js --network hashio 