//SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@chainlink/contracts/src/v0.8/interfaces/FeedRegistryInterface.sol";

contract PriceConsumer {

    FeedRegistryInterface internal registry;

    /**
     * Network: Ethereum Mainnet
     * Feed Registry: 0x47Fb2585D2C56Fe188D0E6ec628a38b74fCeeeDf
     */
    constructor() {
        registry = FeedRegistryInterface(0x47Fb2585D2C56Fe188D0E6ec628a38b74fCeeeDf);
    }

    /**
     * Returns the latest price
     */
    function getThePrice(address base, address quote) public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = registry.latestRoundData(base, quote);
        return price;
    }
}
