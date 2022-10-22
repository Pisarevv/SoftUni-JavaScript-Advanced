let {assert} = require("chai");
let chooseYourCar = require("../03.Choose_Your_Car_Resources/chooseYourCar");


describe("Testing all the parameters and function of the object should return expected output", ()=>{

    describe("choosingType function should return correct outputs with correct input and expected errors with incorrect input",() => {

        //tests with incorrect input for year
      

        it("if input year is a number less than 1900 an error is expected", () =>{
            //assign
            let expectedOutput = `Invalid Year!`;

            //act && assert
            assert.throw(() => chooseYourCar.choosingType("sedan","blue",1899), expectedOutput);
        });

        it("if input year is a number less more than 2022 an error is expected", () =>{
            //assign
            let expectedOutput = `Invalid Year!`;

            //act && assert
            assert.throw(() => chooseYourCar.choosingType("sedan","blue",2023), expectedOutput);
        });

        //tests with incorrect input for type

        it("if type is different than Sedan an error is expected", () =>{
            //assign
            let expectedOutput = `This type of car is not what you are looking for.`;

            //act && assert
            assert.throw(() => chooseYourCar.choosingType("Wagon","blue",1900), expectedOutput);
        });

        it("if type is different than Sedan an error is expected", () =>{
            //assign
            let expectedOutput = `This type of car is not what you are looking for.`;

            //act && assert
            assert.throw(() => chooseYourCar.choosingType("sedan","blue",1900), expectedOutput);
        });

        it("if type is different than Sedan an error is expected", () =>{
            //assign
            let expectedOutput = `This type of car is not what you are looking for.`;

            //act && assert
            assert.throw(() => chooseYourCar.choosingType("Cabrio","blue",1900), expectedOutput);
        });

       


        //test with correct inputs for type and year

        
        it("output has to be correct with a sedan with year after 2009", () =>{
            //assign
            let type = "Sedan";
            let color = "Red";
            let year = 2010;
            let expectedOutput = `This ${color} ${type} meets the requirements, that you have.`
            //act && assert
            assert.equal(chooseYourCar.choosingType(type,color,year), expectedOutput);
        });

        it("output has to be correct with a sedan with year after 2009", () =>{
            //assign
            let type = "Sedan";
            let color = "Red";
            let year = 2022;
            let expectedOutput = `This ${color} ${type} meets the requirements, that you have.`;
            //act && assert
            assert.equal(chooseYourCar.choosingType(type,color,year), expectedOutput);
        });

        it("output has to be correct with a sedan with year before 2010", () =>{
            //assign
            let type = "Sedan";
            let color = "Red";
            let year = 2009;
            let expectedOutput = `This ${type} is too old for you, especially with that ${color} color.`;
            //act && assert
            assert.equal(chooseYourCar.choosingType(type,color,year), expectedOutput);
        });

        it("output has to be correct with a sedan with year before 2010", () =>{
            //assign
            let type = "Sedan";
            let color = "Red";
            let year = 1900;
            let expectedOutput = `This ${type} is too old for you, especially with that ${color} color.`;
            //act && assert
            assert.equal(chooseYourCar.choosingType(type,color,year), expectedOutput);
        });


    });


    describe("brands function should return expected result", () =>{

        //incorrect input for the brands 
        it("if the brands input is an object an error has to be thrown",() =>{
            //assign
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName({},1), expectedOutput);
        });

        it("if the brands input is null an error has to be thrown",() =>{
            //assign
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(null,1), expectedOutput);
        });

        it("if the brands input is string an error has to be thrown",() =>{
            //assign
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName("VW",1), expectedOutput);
        });

        it("if the brands input is bool an error has to be thrown",() =>{
            //assign
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(true,1), expectedOutput);
        });

        it("if the brands input is bool an error has to be thrown",() =>{
            //assign
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(true,1), expectedOutput);
        });

        it("if the brands input is undefined an error has to be thrown",() =>{
            //assign
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(undefined,1), expectedOutput);
        });


        //incorrect input for the index
        it("if the index input is bool an error has to be thrown",() =>{
            //assign
            let brands = ["VW","BMW","MERCEDES","ALFA ROMEO"];
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(brands,true), expectedOutput);
        });

        it("if the index input is undefined an error has to be thrown",() =>{
            //assign
            let brands = ["VW","BMW","MERCEDES","ALFA ROMEO"];
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(brands,undefined), expectedOutput);
        });

        it("if the index input is string an error has to be thrown",() =>{
            //assign
            let brands = ["VW","BMW","MERCEDES","ALFA ROMEO"];
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(brands,'1'), expectedOutput);
        });

        it("if the index input is bellow 0 an error has to be thrown",() =>{
            //assign
            let brands = ["VW","BMW","MERCEDES","ALFA ROMEO"];
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(brands,-1), expectedOutput);
        });

        it("if the index input is bellow 0 an error has to be thrown",() =>{
            //assign
            let brands = ["VW","BMW","MERCEDES","ALFA ROMEO"];
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(brands,-132), expectedOutput);
        });

        it("if the index is out of the bounds of the arrayan error has to be thrown",() =>{
            //assign
            let brands = ["VW","BMW","MERCEDES","ALFA ROMEO"];
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(brands,4), expectedOutput);
        });

        it("if the index is out of the bounds of the arrayan error has to be thrown",() =>{
            //assign
            let brands = ["VW","BMW","MERCEDES","ALFA ROMEO"];
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(brands,45), expectedOutput);
        });

        it("if the index is out of the bounds of the arrayan error has to be thrown",() =>{
            //assign
            let brands = [];
            let expectedOutput = "Invalid Information!";

            //act && assert
            assert.throw(() => chooseYourCar.brandName(brands,1), expectedOutput);
        });

        //tests with correct input 

        it("if the index is and brands inputs are correct and they should match the expected output",() =>{
            //assign
            let brands = ["VW","BMW","MERCEDES","ALFA ROMEO"];
            let expectedOutput = "VW, BMW, MERCEDES";

            //act && assert
            assert.equal(chooseYourCar.brandName(brands,3), expectedOutput);
        });

        it("if the index is and brands inputs are correct and they should match the expected output",() =>{
            //assign
            let brands = ["VW","BMW","MERCEDES","ALFA ROMEO"];
            let expectedOutput = "BMW, MERCEDES, ALFA ROMEO";

            //act && assert
            assert.equal(chooseYourCar.brandName(brands,0), expectedOutput);
        });

    });



    describe("carFuelConsumption method shoud work correctly", () =>{
        
        //test with incorrect input for distanceInKilometers
        it("if distanceInKilometers input is string an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption("23",4), expectedOutput);
        });

        it("if distanceInKilometers input is null an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(null,4), expectedOutput);
        });

        it("if distanceInKilometers input is undefined an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(undefined,4), expectedOutput);
        });

        it("if distanceInKilometers input is bool an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(true,4), expectedOutput);
        });

        it("if distanceInKilometers input is bellow 0 an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(-1,4), expectedOutput);
        });

        it("if distanceInKilometers input is bellow 0 an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(-543345,4), expectedOutput);
        });

         
        //test with incorrect input for consumptedFuelLiters
        it("if consumptedFuelLiters input is string an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(23,"4"), expectedOutput);
        });

        it("if consumptedFuelLiters input is null an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(4,null), expectedOutput);
        });

        it("if consumptedFuelLiters input is undefined an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(4,unescape), expectedOutput);
        });

        it("if consumptedFuelLiters input is bool an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(4,true), expectedOutput);
        });

        it("if consumptedFuelLiters input is bellow 0 an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(4,-1), expectedOutput);
        });

        it("if consumptedFuelLiters input is bellow 0 an erorr is expected",() =>{
            //assign
            let expectedOutput = "Invalid Information!"

            //act && assert
            assert.throw(() => chooseYourCar.carFuelConsumption(4,-54534), expectedOutput);
        });



        //tests with correct inputs for both 

        it("if the index is and brands inputs are correct and fuel consumption is bellow or equal to 7 they should match the expected output",() =>{
            //assign
            let distanceInKilometers = 700;
            let consumptedFuelInLiters = 40;

            let expectedFuelConsumption =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            let expectedResult = `The car is efficient enough, it burns ${expectedFuelConsumption} liters/100 km.`


            //act && assert
            assert.equal(chooseYourCar.carFuelConsumption(distanceInKilometers,consumptedFuelInLiters), expectedResult);
        });

        it("if the index is and brands inputs are correct and fuel consumption is bellow or equal to 7 they should match the expected output",() =>{
            //assign
            let distanceInKilometers = 700;
            let consumptedFuelInLiters = 49;

            let expectedFuelConsumption =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            let expectedResult = `The car is efficient enough, it burns ${expectedFuelConsumption} liters/100 km.`


            //act && assert
            assert.equal(chooseYourCar.carFuelConsumption(distanceInKilometers,consumptedFuelInLiters), expectedResult);
        });

        it("if the index is and brands inputs are correct and fuel consumption is above 7 they should match the expected output",() =>{
            //assign
            let distanceInKilometers = 700;
            let consumptedFuelInLiters = 70;

            let expectedFuelConsumption =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            let expectedResult = `The car burns too much fuel - ${expectedFuelConsumption} liters!`


            //act && assert
            assert.equal(chooseYourCar.carFuelConsumption(distanceInKilometers,consumptedFuelInLiters), expectedResult);
        });

        it("if the index is and brands inputs are correct and fuel consumption is above 7 they should match the expected output",() =>{
            //assign
            let distanceInKilometers = 700;
            let consumptedFuelInLiters = 49.1;

            let expectedFuelConsumption =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            let expectedResult = `The car burns too much fuel - ${expectedFuelConsumption} liters!`


            //act && assert
            assert.equal(chooseYourCar.carFuelConsumption(distanceInKilometers,consumptedFuelInLiters), expectedResult);
        });

    });
});
