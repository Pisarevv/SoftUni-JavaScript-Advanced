let {assert} = require('chai');
let carService = require('../JS Advanced Exam - 25 Jun 2022/03. Car Service_Resources');

describe("The functions of the object should work correct", () =>{


    describe("isItExpensiveFunctionShouldWorkCorrectly", () =>{

        it("if the input is  Engine a defined output is expected", () =>{
            //assign
            let input = "Engine";
            let expectedOutput = `The issue with the car is more severe and it will cost more money`;
            //act && assert
            assert.equal(carService.isItExpensive(input),expectedOutput);
        });

        it("if the input is Transmission a defined output is expected", () =>{
            //assign
            let input = "Transmission";
            let expectedOutput = `The issue with the car is more severe and it will cost more money`;
            //act && assert
            assert.equal(carService.isItExpensive(input),expectedOutput);
        });

        it("if the input is not Engine or Transmission a defined output is expected", () =>{
            //assign
            let input = "Clutch";
            let expectedOutput = `The overall price will be a bit cheaper`;
            //act && assert
            assert.equal(carService.isItExpensive(input),expectedOutput);
        });

    });

    describe("discount function should return correct results", () => {


        it("if firstInput is null an error should be thrown", () => {
            assert.throw(() => {carService.discount(null,12)}, "Invalid input");
        });

        it("if secondInput is null an error should be thrown", () => {
            assert.throw(() => {carService.discount(21,null)}, "Invalid input");
        });

        it("if firstInput is undefined an error should be thrown", () => {
            assert.throw(() => {carService.discount(undefined,12)}, "Invalid input");
        });

        it("if secondInput is undefined an error should be thrown", () => {
            assert.throw(() => {carService.discount(21,undefined)}, "Invalid input");
        });

        it("if firstInput is string an error should be thrown", () => {
            assert.throw(() => {carService.discount('1',12)}, "Invalid input");
        });

        it("if secondInput is string an error should be thrown", () => {
            assert.throw(() => {carService.discount(21,'1')}, "Invalid input");
        });

        it("if firstInput is bool an error should be thrown", () => {
            assert.throw(() => {carService.discount(true,12)}, "Invalid input");
        });

        it("if secondInput is bool an error should be thrown", () => {
            assert.throw(() => {carService.discount(21,true)}, "Invalid input");
        });

        it("if numberOfParts is 0 to 2 the discount precentage should be 0", () => {
            //assign
            let expectedOutput = "You cannot apply a discount";
            assert.equal(carService.discount(0,1000),expectedOutput);           
        });

        it("if numberOfParts is 1 the discount precentage should be 0", () => {
            //assign
            let expectedOutput = "You cannot apply a discount";
            assert.equal(carService.discount(1,1000),expectedOutput);           
        });

        it("if numberOfParts is 2 the discount precentage should be 0", () => {
            //assign
            let expectedOutput = "You cannot apply a discount";
            assert.equal(carService.discount(2,1000),expectedOutput);           
        });

        it("if numberOfParts is between 3 and less or equal to 7 the discount percentage should be 15", () => {
            //assign
            let numberOfParts = 3;
            let totalPrice = 1000;
            let expectedSavings = (15/100) * totalPrice;
            let expectedResult = `Discount applied! You saved ${expectedSavings}$`;
            //act && assert
            assert.equal(carService.discount(numberOfParts,totalPrice),expectedResult);

        });

        it("if numberOfParts is between 3 and less or equal to 7 the discount percentage should be 15", () => {
            //assign
            let numberOfParts = 5;
            let totalPrice = 1000;
            let expectedSavings = (15/100) * totalPrice;
            let expectedResult = `Discount applied! You saved ${expectedSavings}$`;
            //act && assert
            assert.equal(carService.discount(numberOfParts,totalPrice),expectedResult);

        });

        it("if numberOfParts is between 3 and less or equal to 7 the discount percentage should be 15", () => {
            //assign
            let numberOfParts = 7;
            let totalPrice = 1000;
            let expectedSavings = (15/100) * totalPrice;
            let expectedResult = `Discount applied! You saved ${expectedSavings}$`;
            //act && assert
            assert.equal(carService.discount(numberOfParts,totalPrice),expectedResult);

        })

        it("if numberOfParts is more than 7 the discount percentage should be 30", () => {
            //assign
            let numberOfParts = 8;
            let totalPrice = 1000;
            let expectedSavings = (30/100) * totalPrice;
            let expectedResult = `Discount applied! You saved ${expectedSavings}$`;
            //act && assert
            assert.equal(carService.discount(numberOfParts,totalPrice),expectedResult);

        });

        it("if numberOfParts is more than 7 the discount percentage should be 30", () => {
            //assign
            let numberOfParts = 58;
            let totalPrice = 1000;
            let expectedSavings = (30/100) * totalPrice;
            let expectedResult = `Discount applied! You saved ${expectedSavings}$`;
            //act && assert
            assert.equal(carService.discount(numberOfParts,totalPrice),expectedResult);

        });

        it("if numberOfParts is more than 7 the discount percentage should be 30", () => {
            //assign
            let numberOfParts = 458;
            let totalPrice = 1000;
            let expectedSavings = (30/100) * totalPrice;
            let expectedResult = `Discount applied! You saved ${expectedSavings}$`;
            //act && assert
            assert.equal(carService.discount(numberOfParts,totalPrice),expectedResult);

        });
        
    });

    describe("partsToBuy function should work correctly", () => {

        it("if firstInput is null an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy(null,["blowoff valve", "coil springs"])}, "Invalid input");
        });

        it("if secondInput is null an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "clutch", price : 1200}]),null)}, "Invalid input");
        });

        it("if firstInput is undefined an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy(undefined,["blowoff valve", "coil springs"])}, "Invalid input");
        });

        it("if secondInput is undefined an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "clutch", price : 1200}]),undefined)}, "Invalid input");
        });

        it("if firstInput is bool an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy(true,["blowoff valve", "coil springs"])}, "Invalid input");
        });

        it("if secondInput is bool an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "clutch", price : 1200}]),true)}, "Invalid input");
        });

        it("if firstInput is number an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy(1,["blowoff valve", "coil springs"])}, "Invalid input");
        });

        it("if secondInput is number an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "clutch", price : 1200}]),1)}, "Invalid input");
        });

        it("if firstInput is string an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy('brakes',["blowoff valve", "coil springs"])}, "Invalid input");
        });

        it("if secondInput is string an error should be thrown", () => {
            assert.throw(() => {carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "clutch", price : 1200}]),'brakes')}, "Invalid input");
        });

        it("if price catalog the otput shoud be 0", () => {
            assert.equal(carService.partsToBuy([],["blowoff valve", "coil springs"]), 0);
        });


        it("total sum of ordered parts should be correct",() => {
            //assign
            let partsToOorder = ["blowoff valve", "coil springs"];
            let partsCatalog = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "clutch", price : 1200}];
            let expectedResult = 145 + 230;

            //act && assert 
            assert.equal(carService.partsToBuy(partsCatalog,partsToOorder), expectedResult);

        });

        
        it("total sum of ordered parts should be correct",() => {
            //assign
            let partsToOorder = ["blowoff valve", "coil springs", "clutch"];
            let partsCatalog = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "clutch", price : 1200}];
            let expectedResult = 145 + 230 + 1200;

            //act && assert 
            assert.equal(carService.partsToBuy(partsCatalog,partsToOorder), expectedResult);

        });

        it("total sum of ordered parts should be correct",() => {
            //assign
            let partsToOorder = ["blowoff valve", "coil springs", "clutch"];
            let partsCatalog = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            let expectedResult = 145 + 230;

            //act && assert 
            assert.equal(carService.partsToBuy(partsCatalog,partsToOorder), expectedResult);

        });


       

    });
});