function sortNumbers(inputArray){
    let sortedArray = inputArray.sort((a,b) => a - b);
    let arrayLength = inputArray.length;
    let result = [];

    for(let i = 0; i < arrayLength / 2 ; i++){
       let currentSmall = sortedArray.shift();
       let currentBig = sortedArray.pop();
       result.push(currentSmall);
       result.push(currentBig);
    }
console.log(result)
    return result;

}


sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);