const chai = require('chai')
const expect = chai.expect

// This an async func that takes in a bool and calls a function
// that returns a message depending on the bool value
const callBackFunc = (boolVal, next) => {
  setTimeout(() => { next(boolVal ? "GOOD" : "BAD") }, 0)
}

describe("CallBack Tests", () => {
  it("should return `GOOD` if `true` is passed in", () => {
    callBackFunc(true, (arg) => {
      expect(arg).to.equal("GOOD")
    })
  })

  it("should return `BAD` if `false` is passed in", () => {
    callBackFunc(false, (arg) => {
      expect(arg).to.equal("BAD")
    })
  })
})
