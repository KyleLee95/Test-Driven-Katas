const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('It returns "invalid length" if charNum is < 0 or charNum > the length of the string', () => {
    expect(wrap("ab", 1)).to.equal(`${"\n"}a${"\n"}b`);
  });
});
