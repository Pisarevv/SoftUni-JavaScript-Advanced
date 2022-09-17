function ProcessValues(input){
    let inputArray = input;
    let reversedArray = inputArray.reverse()
    let processedArray = [];
    for(let i=0; i<inputArray.length;i+=2){
        
            processedArray.push(inputArray[i]*2);
        
    }
    return processedArray.join(' ');
}

ProcessValues([3,0,10,4,7,3]);