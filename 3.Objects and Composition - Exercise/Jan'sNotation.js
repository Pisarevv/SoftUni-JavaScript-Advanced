function notate(inputArray){
  
  let numbers = inputArray.filter(x => typeof(x) ==	"number");
  let operators = inputArray.filter(x => typeof(x) == "string");

  let result;
  if(numbers.length <= operators.length){
    console.log("Error: not enough operands!");

    return;
  }
  if(operators.length  < numbers.length/2){
    console.log("Error: too many operands!");
    return;
  }
  while(true){
    if(numbers.length == 1){
        console.log(numbers.toString());
        return;
    }
    let firstNumber = numbers.pop();
    let secondNumber = numbers.pop();
    let operand = operators.shift();
    let result;

    switch(operand){
        case"+":{
            result = firstNumber + secondNumber;
            break;
        }
        case"-":{
            result = firstNumber - secondNumber;
            break;
        }
        case"*":{
            result = firstNumber * secondNumber;
            break;
        }
        case"/":{
            result = firstNumber / secondNumber;
            break;
        }
    }
    numbers.unshift(result);
    
  }
}



notate([3,
    4,
    '+']
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