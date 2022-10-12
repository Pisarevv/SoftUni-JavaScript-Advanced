(function extendStringOptions(){

    String.prototype.ensureStart = function(startStr) {
        if(this.startsWith(startStr)){
            return newstring = this + '';
        }
        else{
            return newString = startStr + this;
        };
    };

    String.prototype.ensureEnd = function(endString) {
        if(this.endsWith(startStr)){
            return newstring = this;;
        }
        else{
            return newString = this + endString;
        };
    };

    String.prototype.isEmpty = function() {
        if(this.length == 0){
            return true;
        }
        else{
            return false;
        };
    };

    String.prototype.truncate = function(n) {
        let lastIndexOfSpace = this.lastIndexOf(" ");
        if(this.length < n){
            return newstring = this;
        }
        else if(lastIndexOfSpace > 0){
            if(this.lastIndexOf(" ") + 3 <= this.length){
                if(this.lastIndexOf != 0){
                    return this.slice(0,this.lastIndexOf(" ")) + "...";
                }
        }
        }
        else if (lastIndexOfSpace == -1){
            if(n >= 4){
                return this.slice(0,n-3) + "...";
            }
            else{
                let resultString = '';
                for(let i = 0 ; i < n; i++){
                    resultString += '.';
                }
                return resultString;
            }
        }                 
        
    };

    String.format = function(inputString, ...params)
    {
        
        for(let i=0; i<params.length; i++){
            var regEx = new RegExp(`{[${i}]}`);
            inputString = inputString.replace(regEx,params[i]);
        };

        return inputString;

    };






})()



let str = 'quick brown fox jumps over the lazy dog'
str = str.ensureStart('the ');
str = str.ensureStart('the ');
str = str.truncate(16);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
