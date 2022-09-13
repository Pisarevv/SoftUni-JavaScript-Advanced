function CalculateSumOfNumbers (firstNumber, secondNumber){
    let first = Number(firstNumber);
    let second = Number(secondNumber);
    let result = 0;

    for (i = firstNumber; i <= secondNumber; i++)
    {
        result += Number(i);
    }
    console.log(result);
}


CalculateSumOfNumbers('1','5')