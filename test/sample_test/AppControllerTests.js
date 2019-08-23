const chai = require('chai')
const expect = chai.expect
const sinon = require("sinon")

const indexPageText = "ahoy"
const notLoggedIn = "no entry"

const indexPage = {
  getIndexPage: (req, res) => {
    if (req.user.isLoggedIn()) {
      return res.send(indexPageText)
    }
    res.send(notLoggedIn)
  }
}

describe("AppController spy tests", () => {
  describe("getIndexPage", () => {
    it("should return index page text", () => {
      const user = { isLoggedIn: () => {} }
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true)
      const req = { user }
      const res = { send: sinon.spy() }

      indexPage.getIndexPage(req, res)
      expect(res.send.calledOnce).to.be.true
      expect(res.send.firstCall.args[0]).to.equal(indexPageText)

      // assert that the stub is logged in at least once
      expect(isLoggedInStub.calledOnce).to.be.true
    })
  })
})

describe("AppController mock tests", () => {
  describe("getIndexPage", () => {
    it("should return index page text", () => {
      const user = { isLoggedIn: () => {} }
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true)
      const req = { user }
      const res = { send: () => {} }

      const mock = sinon.mock(res) // mock response
      mock.expects("send").once().withExactArgs(indexPageText)

      indexPage.getIndexPage(req, res)

      expect(isLoggedInStub.calledOnce).to.be.true

      mock.verify()
    })
  })
})
