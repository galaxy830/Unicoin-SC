require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const { mnemonic, infuraKey, apiKey, apiKeyBSC } = require("./secrets.json");

module.exports = {
    solidity: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 10,
            },
        },
    },
    networks: {
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/" + infuraKey,
            gas: 10000000,
            accounts: { mnemonic: mnemonic },
        },
        testnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            accounts: { mnemonic: mnemonic },
        },
        main: {
            url: "https://bsc-dataseed.binance.org/",
            accounts: { mnemonic: mnemonic },
        },
    },
    etherscan: {
        apiKey: apiKey,
        // apiKey: apiKeyBSC,
    },
};