function CalculateDiagonalSums(inputArray){
    let firstIndex = 0;
    let lastIndex = inputArray.length - 1;
    let mainSum = 0;
    let secondarySum = 0;

    for(row = 0; row < inputArray.length; row ++){
        let currentRow = inputArray[row];
       for(col = 0; col < currentRow.length; col++){
        mainSum += currentRow[firstIndex];
        secondarySum += currentRow[lastIndex];
        firstIndex++;
        lastIndex--;
        break;
       }
    }

    return `${mainSum} ${secondarySum}`;
}

CalculateDiagonalSums([[20, 40],
    [10, 60]]
   );

CalculateDiagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )