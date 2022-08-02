//const { ethers } = require("ethers");
import "@nomiclabs/hardhat-etherscan";
import "hardhat-typechain";
import "hardhat-deploy";
import "solidity-coverage";
import "@nomicfoundation/hardhat-chai-matchers";
import { config as dotEnvConfig } from "dotenv";
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

dotEnvConfig();


module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
