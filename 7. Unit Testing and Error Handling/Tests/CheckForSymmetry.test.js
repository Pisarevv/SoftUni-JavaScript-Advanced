let {assert} = require('chai');
let isSymmetric = require('../CheckForSymmetry');


describe("isSymmetric method should return false if array is not symetric and true if it is " , () => {

    it('output should be false if the input is an object', () =>{
        //assign
        let input = {};
        //act && assert
        assert.equal(isSymmetric(input), false);
    })

    
    it('output should be false if the input is a string', () =>{
        //assign
        let input = '1';
        //act && assert
        assert.equal(isSymmetric(input), false);
    })

    it('output should be false if the input is a number', () =>{
        //assign
        let input = 1;
        //act && assert
        assert.equal(isSymmetric(input), false);
    })

    it('output should be false if the input is a bool', () =>{
        //assign
        let input = false;
        //act && assert
        assert.equal(isSymmetric(input), false);
    })

    it('output should be false if array is not symmetric', () =>{
        //assign
        let input = [1,2,3];
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(input), expectedOutput);
    })

    it('output should be false if array is not symmetric', () =>{
        //assign
        let input = [];
        let expectedOutput = true;
        //act && assert
        assert.equal(isSymmetric(input), expectedOutput);
    })

    it('output should be false if array is not symmetric', () =>{
        //assign
        let input = ['a','b','c','b'];
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(input), expectedOutput);
    })

    it('output should be false if array is not symmetric', () =>{
        //assign
        let input;
        let expectedOutput = false;
        //act && assert
        assert.equal(isSymmetric(input), expectedOutput);
    })

    it('output has to be true if array is symmetric with numbers', () =>{
        //assign
        let input = [1,2,3,3,2,1];
        let expectedOutput = true;
        //act && assert
        assert.equal(isSymmetric(input), expectedOutput);
    })

    it('output has to be true if array is symmetric with strings', () =>{
        //assign
        let input = ['a','b','c','c','b','a'];
        let expectedOutput = true;
        //act && assert
        assert.equal(isSymmetric(input), expectedOutput);
    })
})


describe('output should be true if', () => {

   
})