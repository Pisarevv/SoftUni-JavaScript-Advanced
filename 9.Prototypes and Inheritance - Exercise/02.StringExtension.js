(function solve() {

    String.prototype.ensureStart = function (startStr) {
        if (this.startsWith(startStr)) {
            return this.toString();
        }
        else {
            return this.toString();
        };
    };

    String.prototype.ensureEnd = function (endString) {
        if (this.endsWith(endString)) {
            return this.toString();
        }
        else {
            return newString = this + endString;
        };
    };

    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        }
        else {
            return false;
        };
    };

    String.prototype.truncate = function(n) {

        if(Number(n) < 4) {

            return ".".repeat(Number(n));

        }

        if (Number(n) >= this.length) {
                
            return this.toString();

        }
        
        let lastWhitespace = this.toString().substring(0, n - 2).lastIndexOf(" ");

        return lastWhitespace !== -1 
            ? `${this.toString().substring(0, lastWhitespace)}...` 
            : `${this.toString().substring(0, n - 3)}...`;
        
    }


    String.format = function (inputString, ...params) {

        for (let i = 0; i < params.length; i++) {
            var regEx = new RegExp(`{[${i}]}`);
            inputString = inputString.replace(regEx, params[i]);
        };

        return inputString;

    };






})()


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
