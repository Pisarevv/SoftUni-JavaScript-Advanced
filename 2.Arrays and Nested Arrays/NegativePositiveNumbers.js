function FindPositionOfNumber(input){
    let inputArray = input;
    let resultArray =[];
    for(let i=0; i < inputArray.length; i++){
        if(inputArray[i] < 0){
            resultArray.unshift(inputArray[i]);
        }
        else{
            resultArray.push(inputArray[i]);
        }
    }

    resultArray.forEach(x=> console.log(x));
}

FindPositionOfNumber([7, -2, 8, 9]);