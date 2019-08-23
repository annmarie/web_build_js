const assert = require('assert')
const chai = require('chai')
const expect = chai.expect

describe('SampleTest', () => {
  let res = false
  let name = ''
  let arr1 = []
  let arr2 = []


  before('setup', () => {
    res = true
    name = 'Name'
    arr1 = [3, 3, 2, 5]
    arr2 = [2,3]
  })

  describe('the call', () => {
    it('should work', () => {
      assert(res)
    })
  })

  describe('check name', () => {
    it('should match name', () => {
      assert.equal(name, 'Name')
    })
  })

  describe('compare arrays', () => {
    it('should match', () => {
      expect(arr1).to.deep.equal(arr1)
    })
    it('should not match', () => {
      expect(arr1).to.deep.not.equal(arr2)
    })
  })

  after('breakdown', () => {
    res = false
    name = ''
    arr1 = []
    arr2 = []
  })

})
