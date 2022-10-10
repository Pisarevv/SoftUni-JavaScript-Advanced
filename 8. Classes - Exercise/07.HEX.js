class Hex{
    constructor(inputValue){
        this.value = inputValue;
    }

    parse(number){
        let inDecimal = parseInt(number,16);
        return inDecimal;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`
    }
    
    plus(inputNumber){
        if(typeof inputNumber == 'object'){
            let objValue =  this.value + inputNumber;
            return new Hex(objValue);
        }
        else{
            let objValue = inputNumber;
            this.value += objValue;
            return new Hex(this.value);
        }
    }

    minus(inputNumber){
        if(typeof inputNumber == 'object'){
            let objValue = this.value - inputNumber.value;
            return new Hex(objValue);
        }
        else{
            let objValue =  this.value - inputNumber;
            return new Hex(objValue);
        }

    }
}

let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
let act3 = a.minus(b).toString();
let exp3 = "0x5";
assert.equal(act3,exp3);
