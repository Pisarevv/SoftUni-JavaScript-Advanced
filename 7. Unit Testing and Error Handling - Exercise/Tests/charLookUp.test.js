let {assert} = require('chai');
let {lookupChar} = require('../03.CharLookup');


describe('the function should return the char at the index of a string', () => {

    //invalid input test with input different than a string
    it('if input is a number the function should return undefined', () =>{
        //assign
        let input =1234;
        let inputIndex = 1;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input is an array the function should return undefined', () =>{
        //assign
        let input =[1234];
        let inputIndex = 1;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input is an object the function should return undefined', () =>{
        //assign
        let input = {string : 'asd'};
        let inputIndex = 1;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input is a floating number the function should return a warning', () =>{
        //assign
        let input = 1.2;
        let inputIndex = 1;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input is a undefined the function should return undefined', () =>{
        //assign
        let input = undefined;
        let inputIndex = 1;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input is null the function should return undefined', () =>{
        //assign
        let input = null;
        let inputIndex = 1;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input is bool the function should return undefined', () =>{
        //assign
        let input = true;
        let inputIndex = 1;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    //invalid index test if it is different than a integer

    it('if input index is a string the function should return undefined', () =>{
        //assign
        let input ='chai';
        let inputIndex = '1';
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input index is an array the function should return undefined', () =>{
        //assign
        let input ='chai';
        let inputIndex = [1];
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input index is an object the function should return undefined', () =>{
        //assign
        let input ='chai';
        let inputIndex = {1:1};
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input index is a undefined the function should return undefined', () =>{
        //assign
        let input ='chai';
        let inputIndex = undefined;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input index is null the function should return undefined', () =>{
        //assign
        let input ='chai';
        let inputIndex = null;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input index is bool the function should return undefined', () =>{
        //assign
        let input ='chai';
        let inputIndex = true;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input index is  a floating number the function should return a warning', () =>{
        //assign
        let input ='chai';
        let inputIndex = 2.3;
        let expectedOutput = undefined;

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });



    //if index is out of the bounds of the array the function should return 'Incorrect index'

    it('if input index is bigger than the string length the function should return a warning', () =>{
        //assign
        let input ='chai';
        let inputIndex = 4;
        let expectedOutput = "Incorrect index";

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input index is bigger than the string length the function should return a warning', () =>{
        //assign
        let input ='chai';
        let inputIndex = 104;
        let expectedOutput = "Incorrect index";

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('if input index is  bellow zero the function should return a warning', () =>{
        //assign
        let input ='chai';
        let inputIndex = -1;
        let expectedOutput = "Incorrect index";

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });



    //output with correct input and input string

    it('with correct input and index the result should be correct', () =>{
        //assign
        let input ='chai';
        let inputIndex = 0;
        let expectedOutput = "c";

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });

    it('with correct input and index the result should be correct', () =>{
        //assign
        let input ='chai';
        let inputIndex = 3;
        let expectedOutput = "i";

        //act && assert
        assert.equal(lookupChar(input,inputIndex), expectedOutput);
    });






    
})








/*function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}*/
