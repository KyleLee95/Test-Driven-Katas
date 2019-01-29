const { expect } = require("chai");
const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("returns an array", () => {
    expect(twoSum([1, 2, 3], 3)).to.have.lengthOf(2);
    expect(twoSum([1, 2, 5, 5, 8], 10)).to.deep.equal([1, 4]);
  });
});
