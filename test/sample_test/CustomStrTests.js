const chai = require('chai')
const expect = chai.expect

class CustomStr {

  constructor(str) {
    this.str = str
  }

  isPalindrone() {
    //return (str === this.str.reverse('')) ? true : false
    const chars = this.str.split('')
    const charsLen = chars.length
    let isPal = true
    for (let leftKey =0;leftKey < charsLen; leftKey++) {
       const rightKey = (charsLen - 1) - leftKey
       if (chars[leftKey] !== chars[rightKey]) {
          isPal = false
       }
    }
    return isPal
  }

  reverseWords() {
    return this.str.split(' ').reverse().join(' ')
  }
  reverseChars() {
    return this.str.split('').reverse().join('')
  }


}

describe('CustomStr', () => {
  describe('isPalindrome', () => {
    const str = "anna"
    const myStr = new CustomStr(str)
    it('should be a palindrome', () => {
      expect(myStr.isPalindrone()).to.equal(true)
    })
  })
  describe('reverseChars', () => {
    const str = "fluffy is puffy"
    const myStr = new CustomStr(str)
    const reverseChars = "yffup si yffulf"
    it('should reverse chars in a string', () => {
      expect(myStr.reverseChars()).to.equal(reverseChars)
    })
  })
  describe('reverseWords', () => {
    const str = "fluffy is puffy"
    const myStr = new CustomStr(str)
    const reverseWords = "puffy is fluffy"
    it('should reverse chars in a string', () => {
      expect(myStr.reverseWords()).to.equal(reverseWords)
    })
  })

})
