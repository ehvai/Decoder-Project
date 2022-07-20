const { caesar }= require("../src/caesar");
const { expect } = require("chai");

// Write your tests here!
describe('ceasar',() =>{
    describe('shift error checking',() =>{
        it("should return false if shift value is above 25",() => {
            const actual = caesar("testing", 26);
            expect(actual).to.be.false
        })
        it("should return false if shift value is below -25",() => {
            const actual = caesar("testing", -26);
            expect(actual).to.be.false
        })
        it("should return false if shift value is 0",() => {
            const actual = caesar("testing", 0);
            expect(actual).to.be.false
        })
    })

    describe('string errors',() =>{
        it('should ignore capital letters',() =>{
            const expected = 'w'
            const actual = caesar("T", 3)
            expect(actual).to.equal(expected)
        })
        it('should keep spaces and special characters',() =>{
            const expected = 'w! w'
            const actual = caesar('t! t',3)
            expect(actual).to.equal(expected)
        })
        it('should adjust for going beyond the alphabet', () =>{
            const expected = 'bcab'
            const actual = caesar('zayz',2)
        })
    })
})