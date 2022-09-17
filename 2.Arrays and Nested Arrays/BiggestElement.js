function ReturnBiggestElementInNestedArray(inputArray)
{
  let biggestValue = Number.MIN_SAFE_INTEGER;

  for(let row = 0; row < inputArray.length; row++){
    inputArray[row].forEach(x => {
        if (x > biggestValue)
        biggestValue = x;
    })
  }

  return biggestValue;
}


ReturnBiggestElementInNestedArray([[20, 50, 10],
    [8, 33, 145]]
   );