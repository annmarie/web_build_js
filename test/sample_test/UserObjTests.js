const chai = require('chai')
const expect = chai.expect
const sinon = require("sinon");


const UserName = "Tip Toe"

const user = {
  addUser: (name) => {
    this.name = name
  }
}

describe("User", function() {
  describe("addUser", function() {
    it("should add a user", function() {
      sinon.spy(user, "addUser")
      user.addUser(UserName)

      expect(user.addUser.calledOnce).to.be.true;
      expect(user.addUser.firstCall.args[0]).to.equal(UserName);
    })
  })
})
