require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL // "https://eth-kovan.alchemyapi.io/v2/your-api-key"

module.exports = {
  solidity: "0.8.6",
  networks: {
    hardhat: {
      forking: {
        url: KOVAN_RPC_URL
      }
    }
  }
};
