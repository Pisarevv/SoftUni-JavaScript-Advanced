function CookNumbers(inputNumber,...params){
  let number = Number(inputNumber);
  let arrayOfCommands = params;

  
  arrayOfCommands.forEach(command => {
    if(command == 'chop') {
        number = number/2;
    }
    else if (command == 'dice'){
        number = Math.sqrt(number);
    }
    else if (command == 'spice'){
        number = number + 1;
    }
    else if (command == 'bake'){
        number = number * 3;
    }
    else if(command == 'fillet'){
        let twentyPercentOfTheValue = number * 0.2;
        number = number - twentyPercentOfTheValue;
    }
    console.log(number);
  })
}


CookNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');