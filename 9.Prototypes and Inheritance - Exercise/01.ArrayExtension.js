(function solve(){

    Array.prototype.last = function() { return this[this.length-1]};

    Array.prototype.skip = function(n) {return arr = this.slice(n)};

    Array.prototype.take = function(n) {return arr = this.slice(0,n)};

    Array.prototype.sum = function() {return this.reduce((previuos,current) => previuos + current)};

    Array.prototype.average = function() {return this.sum() / this.length};
    
}
)()

let testArr = [1,2,3];
console.log(testArr.last());
console.log(testArr.skip(2));
console.log(testArr.take(2));
console.log(testArr.sum());
console.log(testArr.average());