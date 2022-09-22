function createWorker(inputObject){
   inputObject.dizziness == true ? hydrateWorker() : inputObject;
   return inputObject;
   
   function hydrateWorker(){
    let needAmountOfWater  = inputObject.weight*inputObject.experience*0.1;
    inputObject.levelOfHydrated = needAmountOfWater;
    inputObject.dizziness = false;
   }
}




createWorker({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )