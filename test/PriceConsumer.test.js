const { expect } = require("chai");

const LINK = '0x514910771AF9Ca656af840dff83E8264EcF986CA' // Mainnet LINK ERC20 address
const USD = '0x0000000000000000000000000000000000000348' // Hexadecimal of ISO 4217

describe("PriceConsumer", function() {
  it("Should return latest price", async function() {
    const PriceConsumer = await ethers.getContractFactory("PriceConsumer");
    const consumer = await PriceConsumer.deploy();
    await consumer.deployed();

    const data = await consumer.getThePrice(LINK, USD)
    expect(data.gte(0));
  });
});
