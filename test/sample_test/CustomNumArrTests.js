const assert = require('assert')
const chai = require('chai')
const expect = chai.expect

class CustomNumArr {

  constructor(arr) {
    this.arr = arr
  }

  findTheZero(start) {
    const arr = this.arr
    const move = arr[start]
    const arrlen = arr.length
    for(let i=0; i < arrlen; i++) {
      const idx = (i + start) % arrlen + move
      if (arr[idx] == 0)
        return true
    }
    return false
  }

  findIntersection(arr) {
    //return [... new Set(this.arr)].filter(v => inArr.indexOf(v) !== -1)
    //const inSet = new Set(inArr)
    //return [... new Set(this.arr)].filter(v => inSet.has(v))
    const match = []
    for (let i=0; i<this.arr.length; i++) {
      const item = this.arr[i]
      if ((arr.indexOf(item) != -1) && (match.indexOf(item) == -1))
        match.push(item)
    }
    return match
  }

  findOddNumsRange(l,r) {
    const found = []
    for (let i = l; i <= r; i++) {
        if(i % 2 != 0) found.push(i)
    }
    return found
  }

  findMissing() {
    // const arr = [1-9]  a number is missing
    //arr = [1,2,3,5,6,7,8,9]
    const arr = this.arr
    const len = arr.length
    const last = arr[arr.length-1]
    const total = last*(last+1)/2
    const arrSum = arr.reduce((t,v) => t + v)
    return total - arrSum
  }
}

describe('CustomNumArr tests', () => {
  describe('CustomNumArr getToZero tests', () => {
    const baseArr = [2,0,1,1]
    const myNumArr = new CustomNumArr(baseArr)
    it('should not find if it get to zero', () => {
      const start = 0
      expect(myNumArr.findTheZero(start)).to.be.false
    })
    it('should find if it get to zero', () => {
      const start = 1
      expect(myNumArr.findTheZero(start)).to.be.true
    })
  })

  // intersection
  // 1, 2, 3 and 3, 2, 5 = 2, 3
  describe('CustomNumArr intersection tests', () => {
    const baseArr = [1, 2, 3, 2]
    const myNumArr = new CustomNumArr(baseArr)
    const compArr = [3, 3, 2, 5]
    const rset = [2,3]

    describe('findIntersection', () => {
      it('should compare two array intersection', () => {
        expect(myNumArr.findIntersection(compArr)).to.deep.equal(rset)
      })
    })

  })

  describe('CustomNumArr find odd numbers in range', () => {
    const l = 3
    const r = 9
    const odds = [3,5,7,9]
    const myNumArr = new CustomNumArr([])
    describe('findOddNumsRange test', () => {
      it('should find odd numbers in a range', () => {
        expect(myNumArr.findOddNumsRange(l, r)).to.deep.equal(odds)
      })
    })
  })

  describe('CustomNumArr intersection tests', () => {
    const arr = [1,2,3,5,6,7,8,9]
    const myNumArr = new CustomNumArr(arr)
    const missingNum = 4
    describe('findMissing test', () => {
      it('should find missing number', () => {
        expect(myNumArr.findMissing()).to.equal(missingNum)
      })
    })
  })
})
