let {assert} = require('chai');
let {rgbToHexColor} = require('../RGBToHex')




describe('RGB to hex should return hex value of a color', () => {

    it('If the input is with empty  values the function should return undefined', () =>{
        //assign
        let red;
        let green;
        let blue;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the input empty the function should return undefined', () =>{
        //assign
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(), expetedOutput);

    })


    it('If the input is boolean the function should return undefined', () =>{
        //assign
        let red = true;
        let green  = true;
        let blue = true;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the input is a function the function should return undefined', () =>{
        //assign
        let red = {};
        let green= {};
        let blue= {};
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })
    it('If the input is an array the function should return undefined', () =>{
        //assign
        let red = [];
        let green = [];
        let blue = [];
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the first input that is for red is not a number function should return undefined', () =>{
        //assign
        let red = '1';
        let green = 10;
        let blue = 10;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the first input that is for red is bellow zero function should return undefined', () =>{
        //assign
        let red = -1;
        let green = 10;
        let blue = 10;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the first input that is for red is above 255 function should return undefined', () =>{
        //assign
        let red = 256;
        let green = 10;
        let blue = 10;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the first input that is for green is not a number function should return undefined', () =>{
        //assign
        let red = 10;
        let green = '1';
        let blue = 10;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the first input that is for red is bellow zero function should return undefined', () =>{
        //assign
        let red = 10;
        let green = -10;
        let blue = 10;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the first input that is for red is above 255 function should return undefined', () =>{
        //assign
        let red = 10;
        let green = 256;
        let blue = 10;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the first input that is for blue is not a number function should return undefined', () =>{
        //assign
        let red = 10;
        let green = 10;
        let blue = '1';
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the first input that is for blue is bellow zero function should return undefined', () =>{
        //assign
        let red = 10;
        let green = 10;
        let blue = -1;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })

    it('If the first input that is for blue is above 255 function should return undefined', () =>{
        //assign
        let red = 10;
        let green = 10;
        let blue = 256;
        let expetedOutput = undefined;
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })



    // corret answers

    it('Result should be the same as the expected', () =>{
        //assign
        let red = 25;
        let green = 25;
        let blue = 25;
        let expetedOutput = '#191919';
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })


    it('Result should be the same as the expected', () =>{
        //assign
        let red = 255;
        let green = 158;
        let blue = 170;
        let expetedOutput = '#FF9EAA';
        //act && assert
        assert.equal(rgbToHexColor(red,green,blue), expetedOutput);

    })
})