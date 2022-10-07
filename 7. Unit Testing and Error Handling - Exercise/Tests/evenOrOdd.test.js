let {assert} = require('chai');
let {isOddOrEven} = require('../evenOrOdd');



describe('function shoud return if string length is even or odd', () => {

    it('if input is an object the function should return undefined', () =>{
        //assign
        let input = {};
        let expectedOutput = undefined;

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });

    it('if input is an array the function should return undefined', () =>{
        //assign
        let input = [];
        let expectedOutput = undefined;

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });

    it('if input is undefined the function should return undefined', () =>{
        //assign
        let input = undefined;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });

    it('if input is null the function should return undefined', () =>{
        //assign
        let input = null;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });

    it('if input is a number the function should return undefined', () =>{
        //assign
        let input = 1;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });

    it('if input is a decimal number the function should return undefined', () =>{
        //assign
        let input = 1.2;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });

    it('if input is missing the function should return undefined', () =>{
        //assign
        let expectedOutput = undefined;

        //act && assert
        assert.equal(isOddOrEven(),expectedOutput);
    });


    //test correct result

    it('if input is a string with length 4 the function should return even', () =>{
        //assign
        let input = "Icee"
        let expectedOutput = "even";

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });

    it('if input is a string with length 3 the function should return odd', () =>{
        //assign
        let input = "Ice"
        let expectedOutput = "odd";

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });

    it('if input is a string with length 5 the function should return odd', () =>{
        //assign
        let input = "IceCu"
        let expectedOutput = "odd";

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });

    it('if input is a string with length 6 the function should return even', () =>{
        //assign
        let input = "IceCub"
        let expectedOutput = "even";

        //act && assert
        assert.equal(isOddOrEven(input),expectedOutput);
    });







})