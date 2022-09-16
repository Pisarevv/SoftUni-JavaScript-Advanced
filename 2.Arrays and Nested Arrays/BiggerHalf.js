function FindBiggestHalf(input){
    let inputArray = input;
    let sortedArray = inputArray.sort((a,b)=> a - b);
    let result = sortedArray.slice(sortedArray.length/2,sortedArray.length);

    console.log(result);
}

FindBiggestHalf([4, 7, 2, 5]);
FindBiggestHalf([3, 19, 14, 7, 2, 19, 6]);