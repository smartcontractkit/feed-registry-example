require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL // "https://eth-mainnet.alchemyapi.io/v2/your-api-key"

module.exports = {
  solidity: "0.8.6",
  networks: {
    hardhat: {
      forking: {
        url: MAINNET_RPC_URL
      }
    }
  }
};
