function FindBiggestHalf(array){
    array.sort((a,b)=> a - b);
    const middleOfArray = Math.floor(array.length/2);
    let result = array.slice(middleOfArray);

    return result;
}

FindBiggestHalf([4, 7, 2, 5]);
FindBiggestHalf([3, 19, 14, 7, 2, 19, 6]);