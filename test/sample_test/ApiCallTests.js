const request = require('request')
const chai = require("chai")
const expect = chai.expect
const sinon = require("sinon")
const sinonChai = require("sinon-chai")
chai.use(sinonChai)

class ApiClient {
  constructor(reqClient, apiKey) {
    this.reqClient = reqClient;
    this.apiKey = apiKey;
    this.isApiKeyValid = true;
  }

  get(endpoint, next) {
    const apiKey = this.apiKey
    this.reqClient.get(endpoint, { apiKey }, (err, resp) => {
      if (err) return next(err)
      if (resp.status >= 500) {
        return next(new Error('INTERNAL_SERVER_ERROR'))
      }
      if (resp.status == 403) {
        this.isApiKeyValid = false;
        return next(new Error('AUTH_ERROR'))
      }
      return next(null, resp);
    })
  }
}

describe("ApiCallTests", function() {
  describe("test get requests", function() {
    it('issues the request `/endpoint`', () => {
      sinon.stub(request, 'get').yields(null, {})
      apiClient = new ApiClient(request, 'api-key')
      apiClient.get('/endpoint', (err, response) => {
        expect(request.get).to.have.been.calledOnce
      })
    })
  })
})
