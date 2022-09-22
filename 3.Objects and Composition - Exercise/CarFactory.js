
function createCar(inputObject){
    let engineEnum = {
        "Small engine":{ power: 90, volume: 1800 },
        "Normal engine":{ power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
         }
   let newObject = {};
   newObject.model = inputObject.model;
   if(inputObject.power <= 90){
    newObject.engine = engineEnum["Small engine"];
   }
   else if(inputObject.power > 90 && inputObject.power <= 120){
    newObject.engine = engineEnum["Normal engine"];
   }
   else if(inputObject.power > 120){
    newObject.engine = engineEnum["Monster engine"];
   }
   newObject.carriage = {type:inputObject.carriage, color:inputObject.color};
   
   inputObject.wheelsize % 2 != 0 ? (newObject.wheels = new Array(4).fill(inputObject.wheelsize)) : (newObject.wheels = new Array(4).fill(inputObject.wheelsize-1))


   return newObject;

}



createCar({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);

createCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)