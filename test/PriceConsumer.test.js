const { expect } = require("chai");

const KOVAN_FEED_REGISTRY_ADDRESS = "0xAa7F6f7f507457a1EE157fE97F6c7DB2BEec5cD0"
const TIMEOUT = 60000 // ms

describe("PriceConsumer", function() {
  it("Should return latest ETH / USD price", async function() {
    const PriceConsumer = await ethers.getContractFactory("PriceConsumer");
    const consumer = await PriceConsumer.deploy(KOVAN_FEED_REGISTRY_ADDRESS);
    await consumer.deployed();

    const data = await consumer.getEthUsdPrice()
    expect(data.gte(0));
  }, TIMEOUT);
});
