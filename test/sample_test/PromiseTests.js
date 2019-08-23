const chai = require("chai")
const expect = chai.expect
chai.use(require("chai-as-promised"))

const returnPromiseFunc = (boolVal, next) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(boolVal ? "GOOD" : "BAD") }, 0)
  })
}

describe("PromiseTest", function()  {
  it("should return `GOOD` if `true` is passed in", () => {
    return expect(returnPromiseFunc(true)).to.eventually.equal("GOOD")
  })

  it("should return `BAD` if `false` is passed in", () => {
    return expect(returnPromiseFunc(false)).to.eventually.equal("BAD")
  })
})
