function notate(inputArray){
  
  let numbers = inputArray.filter(x => typeof(x) ==	"number");
  let operators = inputArray.filter(x => typeof(x) == "string");

  let result =[];
  if(numbers.length <= operators.length || numbers.length === 0 ){
    console.log("Error: not enough operands!");

    return;
  }
  if(operators.length  < numbers.length/2){
    console.log("Error: too many operands!");
    return;
  }

  for(let element of inputArray){
    if(typeof(element) === "number"){
      result.push(element);
      continue;
    }
    let operand = element;
    let secondNumber = result.pop();
    let firstNumber = result.pop();
    
    let curResult = 0;

    switch(operand){
        case"+":{
          curResult =  (firstNumber + secondNumber);
            break;
        }
        case"-":{
          curResult =  (firstNumber - secondNumber);
            break;
        }
        case"*":{
          curResult =  (firstNumber * secondNumber);
            break;
        }
        case"/":{
          curResult = (firstNumber / secondNumber);
            break;
        }
    }
    result.push(curResult);
    
  }
  console.log(result.join(' '));
}



notate([-1,
  1,
  '+',
  101,
  '*',
  18,
  '+',
  3,
  '/']
   )

   console.log('----------------');
notate([5,
    3,
    4,
    '*',
    '-']
   )
   console.log('----------------');
   notate([7,
    33,
    8,
    '-']
   );
   console.log('----------------');
   notate([15,
    '/']
   )