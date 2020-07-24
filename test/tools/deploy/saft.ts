import { ContractManagerInstance, SAFTInstance } from "./../../../types/truffle-contracts";
import { deployFunctionFactory } from "./factory";
import { deploySkaleTokenTester } from "./test/skaleTokenTester";
import { deployTimeHelpersTester } from "./test/timeHelpersTester";
import { deployTokenLaunchManagerTester } from "./test/tokenLaunchManagerTester";

const deploySAFT: (contractManager: ContractManagerInstance) => Promise<SAFTInstance>
    = deployFunctionFactory("SAFT",
                            async (contractManager: ContractManagerInstance) => {
                                await deploySkaleTokenTester(contractManager);
                                await deployTimeHelpersTester(contractManager);
                                await deployTokenLaunchManagerTester(contractManager);
                            });

export { deploySAFT };