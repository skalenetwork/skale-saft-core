require("ts-node/register");
require('dotenv').config();
const Web3 = require('web3');
let hdwalletProvider = require('@truffle/hdwallet-provider');

let mnemonicOrPrivateKey = process.env.PRIVATE_KEY;

let uniqueEndpoint = process.env.ENDPOINT;

let gasprice = process.env.GASPRICE;

try {
    gasprice = parseInt(gasprice);
    if (!(typeof gasprice == "number") || gasprice < 10000000000 || isNaN(gasprice)) {
        gasprice = 10000000000;
    }
} catch (error) {
    console.log(error);
    gasprice = 10000000000;
}

module.exports = {
    // this is required by truffle to find any ts test files
    test_file_extension_regexp: /.*\.ts$/,

    networks: {
        SKALE_private_testnet: {
            provider: () => { 
                return new hdwalletProvider(mnemonicOrPrivateKey, uniqueEndpoint); 
            },
            gasPrice: 1000000000,
            gas: 8000000,
            gasPrice: gasprice,
            network_id: "*"
        },
        unique: {
            provider: () => { 
                return new hdwalletProvider(mnemonicOrPrivateKey, uniqueEndpoint); 
            },
            gasPrice: 10000000000,
            gas: 8000000,
            gasPrice: gasprice,
            network_id: "*",
            skipDryRun: true
        },
        coverage: {
            host: "127.0.0.1",
            port: "8555",
            gas: 0xfffffffffff,
            gasPrice: 0x01,
            network_id: "*"
        },
        test: {            
            host: "127.0.0.1",
            port: 8545,
            gas: 6900000,
            gasPrice: gasprice,
            network_id: "*"
        },
        mainnet: {
            provider: () => { 
                return new hdwalletProvider(mnemonicOrPrivateKey, uniqueEndpoint); 
            },
            gasPrice: gasprice,
            gas: 8000000,
            network_id: "*",
            skipDryRun: true
        }
    },
    mocha: {
        enableTimeouts: false
    },
    compilers: {
        solc: {
            version: "0.6.10",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    },
    plugins: ["solidity-coverage"]
};
