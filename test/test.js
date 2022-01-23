const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Land Registry", async function() {
  let LandRegistry;
  let factory;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    factory = await ethers.getContractFactory("LandRegistry");

    LandRegistry = await factory.deploy();
  })

  describe("deployment", async function() {
    it("should set the GovtOfficial as the owner", async function () {
      expect(await LandRegistry.GovtOfficialAddress()).to.equal(owner.address)
    })
  })

});
