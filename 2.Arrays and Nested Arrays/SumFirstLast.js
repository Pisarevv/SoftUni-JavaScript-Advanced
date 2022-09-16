function CalculateFirstAndLastElement(input){
    let inputArray = input;
    let result = 0;
    result += Number(input.shift());
    result += Number(input.pop());

    console.log(result);

}

CalculateFirstAndLastElement(['20', '30', '40'])