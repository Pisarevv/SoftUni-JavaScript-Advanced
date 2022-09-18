function ExtreactIncreasingSubset(inputArr){
    let currentBiggest = Number.MIN_VALUE;
    let result = [];
    for(let currNumber of inputArr){
      if (currNumber >= currentBiggest){
        result.push(currNumber);
        currentBiggest = currNumber;
      }
    }
    return result;
}


ExtreactIncreasingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24,
53,
25,
6565]
    );

 ExtreactIncreasingSubset([20, 
        3, 
        2, 
        15,
        6, 
        1]
        );