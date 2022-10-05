function sum(inputArr,startIndex,endIndex){

    if(!Array.isArray(inputArr)){
        return NaN;
    }
    if(startIndex < 0 ) {
        startIndex = 0;
    }
    if(endIndex > inputArr.length - 1){
        endIndex = inputArr.length - 1;
    }
    let result = 0;
    for(let i = startIndex; i <= endIndex; i++){
        result += Number(inputArr[i]);
    }
    return result;
}

console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));