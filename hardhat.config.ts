import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ganache";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.15",
            },
            {
                version: "0.6.6",
            },
            {
                version: "0.6.12",
            },
        ],
    },
    networks: {
        hardhat: {
            mining: {
                auto: false,
                interval: [5000, 5000],
            },
            chainId: Number(process.env.CHAIN_ID),
            forking: {
                url: process.env.NETWORK_URL || "",
                // blockNumber: Number(process.env.FROM_BLOCK) || 228,
            },
            accounts: [
                {
                    balance: "100000000000000000000000000000",
                    privateKey: process.env.PRIVATE_KEY as string,
                },
            ],
        },
        polygon: {
            url: "https://polygon-rpc.com/",
            accounts: [process.env.PRIVATE_KEY as string],
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
    },
};

export default config;
