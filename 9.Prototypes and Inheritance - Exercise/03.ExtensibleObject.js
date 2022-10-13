function result() { 
    return {
         extend(template) {
                let currentPrototype = Object.getPrototypeOf(this);
                for(let property of Object.entries(template)){
                    let propertyName = property[0];
                    let propertyValue = property[1];
                    if(typeof(propertyValue) === "function"){
                        currentPrototype[propertyName] = propertyValue;
                    }
                    else{
                        this[propertyName] = propertyValue;
                    }

                }
            
        }
    }
};
    
var template = {
    fight: function(target) { return `object fights with ${target}` },
    health: 100,
    mana: 50
};

var testObject = result();
testObject.extend(template);
console.log(testObject)
console.log(testObject.fight('asd'))