let { assert } = require('chai');
let { createCalculator } = require('../addSubtract');


describe('createCalculator function should return an object with initial value and three functions', () => {

    it('creating the object should return a object containing add property', () => {
        //assign
        let calculator = createCalculator();
        let expectedProperty = 'add';
        let expectedResult = true;
        //act && assert
        assert.equal(calculator.hasOwnProperty(expectedProperty), expectedResult);

    })

    it('creating the object should return a object containing subtract property', () => {
        //assign
        let calculator = createCalculator();
        let expectedProperty = 'subtract';
        let expectedResult = true;
        //act && assert
        assert.equal(calculator.hasOwnProperty(expectedProperty), expectedResult);

    })

    it('creating the object should return a object containing get property', () => {
        //assign
        let calculator = createCalculator();
        let expectedProperty = 'get';
        let expectedResult = true;
        //act && assert
        assert.equal(calculator.hasOwnProperty(expectedProperty), expectedResult);

    })

    it('get method should return correct value of the internal value', () => {
        //assign
        let calculator = createCalculator();
        let expectedResult = 0;

        assert.equal(calculator.get(), expectedResult);
    })


    it('using add property should increase the internal sum  with a number which can be accessed by get property', () => {
        //assign
        let calculator = createCalculator();
        let expectedResult = 5;

        //act 
        calculator.add(5);
        //assert
        assert.equal(calculator.get(), expectedResult);
    })

    it('using add property should increase the internal sum  with a string which can be accessed by get property', () => {
        //assign
        let calculator = createCalculator();
        let expectedResult = 5;

        //act 
        calculator.add('5');
        //assert
        assert.equal(calculator.get(), expectedResult);
    })

    it('invalid input in add property should return NaN', () => {
        //assign
        let calculator = createCalculator();
        let expectedResult = NaN;
        //act 
        calculator.add("A");
        //assert
        assert.isNaN(calculator.get());
    })

    it('using subtract property should decrease the internal sum  with a number which can be accessed by get property', () => {
        //assign
        let calculator = createCalculator();
        let expectedResult = -5;

        //act 
        calculator.subtract(5);
        //assert
        assert.equal(calculator.get(), expectedResult);
    })

    it('using subtract property should assign the internal sum  with a string which can be accessed by get property', () => {
        //assign
        let calculator = createCalculator();
        let expectedResult = -5;

        //act 
        calculator.subtract('5');
        //assert
        assert.equal(calculator.get(), expectedResult);
    })

    it('invalid input in subtract property should return NaN', () => {
        //assign
        let calculator = createCalculator();
        let expectedResult = NaN;
        //act 
        calculator.subtract("A");
        //assert
        assert.isNaN(calculator.get());
    })

})
