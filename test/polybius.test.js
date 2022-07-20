const {polybius} = require('../src/polybius')
const {expect} = require("chai")

describe('polybius',() =>{
it('should take into account spaces', () => {
    const expected = '445134444233 22'
    const actual = polybius('testin g')
    expect(actual).to.equal(expected)
})
it('should ignore capital letters',() =>{
    const expected = '44513444423322'
    const actual = polybius('TesTing')
    expect(actual).to.equal(expected)
})
it('should treat i and j the same on encoding',() =>{
    const expected = '42543444 4233 31113451'
    const actual = polybius('just in case')
    expect(actual).to.equal(expected)
})
it('should assign 42 to both i and j on decoding',() =>{
    const actual = polybius('424222221351', false)
    expect(actual).to.include("i");
    expect(actual).to.include("j");
})
it('should output a string',() =>{
    const actual = polybius('testing')
    expect(actual).to.be.a('string')
})
})
