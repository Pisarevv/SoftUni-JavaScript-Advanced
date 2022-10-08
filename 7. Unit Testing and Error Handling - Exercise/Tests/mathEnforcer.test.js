let {assert} = require('chai');
let mathEnforcer = require('../04.MathEnforcer');





describe('mathEnforcer should be able to do its nested functions and return correct result', () => {

    describe('addFive should add return the input plus five', () => {

        //test with invalid inputs

        it('function should return undefined if input is a string', () => {
            //assign
            let input = '1';
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.addFive(input),expectedOutput);
        });

        it('function should return undefined if input is a bool', () => {
            //assign
            let input = true;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.addFive(input),expectedOutput);
        });

        it('function should return undefined if input is an object', () => {
            //assign
            let input = {};
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.addFive(input),expectedOutput);
        });

        it('function should return undefined if input is an array', () => {
            //assign
            let input = [1];
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.addFive(input),expectedOutput);
        });

        it('function should return undefined if input is a null', () => {
            //assign
            let input = null;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.addFive(input),expectedOutput);
        });

        it('function should return undefined if input is a string', () => {
            //assign
            let input = undefined;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.addFive(input),expectedOutput);
        });

        //test with valid inputs

        it('function should return currect result if input is a integer', () => {
            //assign
            let input = 0;
            let expectedOutput = 5;

            //act && assert
            assert.equal(mathEnforcer.addFive(input),expectedOutput);
        });

        it('function should return currect result if input is a integer', () => {
            //assign
            let input = 10;
            let expectedOutput = 15;

            //act && assert
            assert.equal(mathEnforcer.addFive(input),expectedOutput);
        });

        it('function should return currect result if input is a integer', () => {
            //assign
            let input = -10;
            let expectedOutput = -5;

            //act && assert
            assert.equal(mathEnforcer.addFive(input),expectedOutput);
        });

        it('function should return currect result if input is a floating', () => {
            //assign
            let input = 10.5;
            let expectedOutput = 15.5;

            //act && assert
            assert.closeTo(mathEnforcer.addFive(input),expectedOutput,0.01);
        });

    });

    describe('subtract should add return the input minus ten', () => {

        //test with invalid inputs

        it('function should return undefined if input is a string', () => {
            //assign
            let input = '1';
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.subtractTen(input),expectedOutput);
        });

        it('function should return undefined if input is a bool', () => {
            //assign
            let input = true;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.subtractTen(input),expectedOutput);
        });

        it('function should return undefined if input is an object', () => {
            //assign
            let input = {};
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.subtractTen(input),expectedOutput);
        });

        it('function should return undefined if input is an array', () => {
            //assign
            let input = [1];
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.subtractTen(input),expectedOutput);
        });

        it('function should return undefined if input is a null', () => {
            //assign
            let input = null;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.subtractTen(input),expectedOutput);
        });

        it('function should return undefined if input is a string', () => {
            //assign
            let input = undefined;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.subtractTen(input),expectedOutput);
        });

        //test with valid inputs

        it('function should return currect result if input is a integer', () => {
            //assign
            let input = 15;
            let expectedOutput = 5;

            //act && assert
            assert.equal(mathEnforcer.subtractTen(input),expectedOutput);
        });

        it('function should return currect result if input is a integer', () => {
            //assign
            let input = 25;
            let expectedOutput = 15;

            //act && assert
            assert.equal(mathEnforcer.subtractTen(input),expectedOutput);
        });

        it('function should return currect result if input is a integer', () => {
            //assign
            let input = -10;
            let expectedOutput = -20;

            //act && assert
            assert.equal(mathEnforcer.subtractTen(input),expectedOutput);
        });

        it('function should return currect result if input is a floating', () => {
            //assign
            let input = 10.5;
            let expectedOutput = 0.5;

            //act && assert
            assert.closeTo(mathEnforcer.subtractTen(input),expectedOutput,0.01);
        });

    });

    describe('sum should add both of the inputs return their sum', () => {

        //test with invalid inputs

        it('function should return undefined if first input is a string', () => {
            //assign
            let num1 = '1';
            let num2 = 1;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if second input is a string', () => {
            //assign
            let num1 = 1;
            let num2 = '1';
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if first input is a bool', () => {
            //assign
            let num1 = true;
            let num2 = 1;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        
        it('function should return undefined if second input is a bool', () => {
            //assign
            let num1 = 1;
            let num2 = true;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if first input is an object', () => {
            //assign
            let num1 = {};
            let num2 = 1;
            let expectedOutput = undefined;
            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if second input is an object', () => {
            //assign
            let num1 = 1;
            let num2 = {};
            let expectedOutput = undefined;
            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if first input is an array', () => {
            //assign
            let num1 = [1];
            let num2 = 1;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if second input is an array', () => {
            //assign
            let num1 = 1;
            let num2 = [1];
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if first input is a null', () => {
            //assign
            let num1 = null;
            let num2 = 1;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if second input is a null', () => {
            //assign
            let num1 = 1;
            let num2 = null;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if first input is a undefined', () => {
            //assign
            let num1 = undefined;
            let num2 = 1;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return undefined if second input is a undefined', () => {
            //assign
            let num1 = 1;
            let num2 = undefined;
            let expectedOutput = undefined;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        //test with valid inputs

        it('function should return currect result if input is a integer', () => {
            //assign
            let num1 = 1;
            let num2 = 1;
            let expectedOutput = 2;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return currect result if input is a integer', () => {
             //assign
             let num1 = 5;
             let num2 = 10;
             let expectedOutput = 15;
 
             //act && assert
             assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return currect result if input is a integer', () => {
            //assign
            let num1 = -10;
            let num2 = -10;
            let expectedOutput = -20;

            //act && assert
            assert.equal(mathEnforcer.sum(num1,num2),expectedOutput);
        });

        it('function should return currect result if input is a floating', () => {
             //assign
             let num1 = 5.5;
             let num2 = 5.5;
             let expectedOutput = 11;
 
             //act && assert
             assert.closeTo(mathEnforcer.sum(num1,num2),expectedOutput,0.01);
        });

    });
});