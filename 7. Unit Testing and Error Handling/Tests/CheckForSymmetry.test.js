let {assert} = require('chai');
let {isSymmetric} = require('../CheckForSymmetry');


describe("isSymmetric method should return false if array is not symetric and true if it is " , () => {

    it('output should be false if the input is an object', () =>{
        //assign
        let arr = {};
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(arr), expectedOutput);
    })

    
    it('output should be false if the input is a string', () =>{
        //assign
        let arr = '1';
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(arr), expectedOutput);
    })

    it('output should be false if the input is a number', () =>{
        //assign
        let arr = 1;
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(arr), expectedOutput);
    })

    it('output should be false if the input is undefined', () =>{
        //assign
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(), expectedOutput);
    })

    it('output should be false if the input is a bool', () =>{
        //assign
        let arr = true;
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(arr), expectedOutput);
    })

    it('output should be false if array is not symmetric', () =>{
        //assign
        let arr = [1,2,3];
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(arr), expectedOutput);
    })


    it('output should be false if array is not symmetric', () =>{
        //assign
        let arr = ['a','b','c','b'];
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(arr), expectedOutput);
    })

    it('output should be false if array is with mixed elements', () =>{
        //assign
        let arr = [23,'23'];
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(arr), expectedOutput);
    })

    it('output has to be true if array is symmetric with numbers', () =>{
        //assign
        let arr = [1,2,3,3,2,1];
        let expectedOutput = true;
        //act && assert
        assert.equal(isSymmetric(arr), expectedOutput);
    })

    it('output has to be true if array is symmetric with strings', () =>{
        //assign
        let arr = ['a','b','c','c','b','a'];
        let expectedOutput = true;
        //act && assert
        assert.equal(isSymmetric(arr), expectedOutput);
    })
})

