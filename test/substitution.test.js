const {substitution} = require('../src/substitution')
const {expect} = require("chai")

describe('substitution', ()=> {
    it('should return false if the cipher alphabet is not equal to 26',() =>{
        const actual = substitution('testing','qwertyuiopasdfghjklzxcvbnm&')
        expect(actual).to.be.false
    })
    it('should return false if there are duplicate characters in the cipher alphabet',() =>{
        const actual = substitution('testing', 'qqqeeeiiisssslllfffgggllla')
        expect(actual).to.be.false
    })
    it('should return an encoded string using the cipher alphabet', () => {
        const expected = 'qwerty'
        const actual = substitution('abcdef', 'qwertyuiopasdfghjklzxcvbnm')
        expect(actual).to.equal(expected)
    })
    it('should keep spaces in the encoded string', () =>{
        const expected = 'qw erty'
        const actual = substitution('ab cdef', 'qwertyuiopasdfghjklzxcvbnm')
        expect(actual).to.equal(expected)
    })
    it('should ignore capital letters in the input', () =>{
        const expected = 'qwerty'
        const actual = substitution('aBcDef', 'qwertyuiopasdfghjklzxcvbnm')
        expect(actual).to.equal(expected)
    })
    it('should ignore capital letters in the cipher alphabet', () =>{
        const expected = 'qwerty'
        const actual = substitution('abcdef', 'qwertyuioPasdFghjklzxcvbnm')
        expect(actual).to.equal(expected)
    })

})