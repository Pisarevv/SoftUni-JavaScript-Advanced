function CalculateGDC(firstNumber,secondNumber)
{
    let firstNumberDivisitors = [];
    let secondNumberDivisitors = [];
  for(i=firstNumber; i>2; i--)
  {
     if(Number(firstNumber)%i == 0){
        firstNumberDivisitors.push(Number(i));
     }
  }

  for(i=secondNumber; i>0; i--)
  {
     if(Number(secondNumber)%i == 0){
        secondNumberDivisitors.push(Number(i));
     }
  }

  console.log(firstNumberDivisitors);
  console.log(secondNumberDivisitors);
}


CalculateGDC(15, 5);
CalculateGDC(2154, 458);