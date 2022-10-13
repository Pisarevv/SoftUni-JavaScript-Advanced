(function solve() {

    String.prototype.ensureStart = function (startStr) {
        if (this.startsWith(startStr)) {
            return newstring = this + '';
        }
        else {
            return newString = startStr + this;
        };
    };

    String.prototype.ensureEnd = function (endString) {
        if (this.endsWith(endString)) {
            return newstring = this + "";
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

    String.prototype.truncate = function (n) {

        if(n < 4){
            let string = `.`.repeat(n);
            return string;
        }

        if (this.length < n) {
            return newstring = this + "";
        }
        else if (this.length >= n)
        {
            let lastIndexOfSpace = this.lastIndexOf(" ");
            if (lastIndexOfSpace >= 0) {
                if (lastIndexOfSpace + 3 <= this.length) {
                    return this.slice(0, lastIndexOfSpace) + "...";
                }
            }
            else if (lastIndexOfSpace == -1) {
                 if (n >= 4) {
                    return this.slice(0, n - 3) + "...";
                }
                else {
                    let resultString = '';
                    for (let i = 0; i < n; i++) {
                        resultString += '.';
                    }
                    return resultString;
                }
            }
        }


    };

    String.format = function (inputString, ...params) {

        for (let i = 0; i < params.length; i++) {
            var regEx = new RegExp(`{[${i}]}`);
            inputString = inputString.replace(regEx, params[i]);
        };

        return inputString;

    };






})()


let str = '1234';
str = str.truncate(4);
console.log(str);
str = str.truncate(6);
console.log(str);
