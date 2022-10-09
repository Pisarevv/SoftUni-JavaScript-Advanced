class Stringer{
    constructor(string,length){
        this.innerString  = string;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        if(this.innerLength - length < 0){
            this.innerLength = 0;
            return;
        }
        this.innerLength -= length;
    }

    toString(){
        let currentSubstring = '';

        if(this.innerString.length > this.innerLength){
           return currentSubstring = this.innerString.substring(0,this.innerLength) + '...';
        }

        else{
            return this.innerString;
        }

        

    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
