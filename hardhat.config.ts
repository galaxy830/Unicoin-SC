import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
require('dotenv').config();

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const SPEEDY_NODE_KEY = process.env.SPEEDY_NODE_KEY || "";
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "";

console.log("infurakey is ----", INFURA_API_KEY, "/",  DEPLOYER_PRIVATE_KEY)
export default {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      }
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
  	},
    eth: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    bsctest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    currency: 'ETH',
  }
};