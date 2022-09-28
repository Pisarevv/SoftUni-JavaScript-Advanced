function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurantRecievedValues = JSON.parse(document.querySelectorAll("div#inputs textarea")[0].value);
      let result = [];
      console.log(restaurantRecievedValues)
      for(let restaurant of restaurantRecievedValues){
         let name = restaurant.split(' - ')[0];
         let workers =  restaurant.split(' - ')[1].split(', ');
         if(!result.some(x => x.name === name))
         {
            let object = {
               name:name,
               averageSalary : 0,
               bestSalary : 0,
               workers : []   
                 }
             result.push(object);
          
         }
         let object = result.find(x => x.name === name);
         let currentSalaryOfWorkers = 0;
         for(let worker of workers)
         {
            let workerName = worker.split(' ')[0];
            let salary = Number(worker.split(' ')[1]);
            currentSalaryOfWorkers += salary;
            let workerObject = {
               name : workerName,
               salary : salary
            }
            object.workers.push(workerObject);
            if(salary > object.bestSalary){
               object.bestSalary = salary.toFixed(2);
            }


         }

         object.averageSalary = (currentSalaryOfWorkers / object.workers.length).toFixed(2);

      }
      for(let object of result){
         object.workers.sort((a,b) => b.salary - a. salary);
      }
      
      result = result.sort((a,b) => b.averageSalary - a.averageSalary);

      let bestRestaurantOutput = document.querySelectorAll("div#bestRestaurant p")[0];
      let bestRestorauntWorkersOutput = document.querySelectorAll("div#workers p")[0];
      bestRestaurantOutput.textContent = `Name: ${result[0].name} Average Salary: ${result[0].averageSalary} Best Salary: ${result[0].bestSalary}`;
      let bestResWorkersList = '';
      for(let worker of result[0].workers){
         bestResWorkersList += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
      bestResWorkersList = bestResWorkersList.trim();
      bestRestorauntWorkersOutput.textContent = bestResWorkersList;
      console.log()

      
      
   }
}