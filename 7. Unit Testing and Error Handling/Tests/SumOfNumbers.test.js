let {assert} = require("chai");
let {sum} = require('../SumofNumbers');



describe("SumFunction should work correctly", () => {

    it('it should return the sum of the array correctly', () => {
        //arrange
        let result = 0;
        let inputArr = [1,2,3];
        let expectedResult = 6;
        //act 
        result = sum(inputArr);
        //assert
        assert.equal(result,expectedResult);
    } )

    it('it should return the sd', () => {
        assert.notEqual(sum([1,2,3]),4);
    } )

    it('it should throw type error when input is differnt than array', () => {
        assert.throw(() => {sum({});}, TypeError);
    })


} )