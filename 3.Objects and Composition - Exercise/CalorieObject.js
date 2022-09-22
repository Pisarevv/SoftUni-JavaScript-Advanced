function createCalorieObject(inputArr){
    let result = {};
    for(let i=0; i<inputArr.length; i+=2){
        
        result[inputArr[i]] = Number(inputArr[i+1]);
        
    }
    console.log(result);
}


createCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);