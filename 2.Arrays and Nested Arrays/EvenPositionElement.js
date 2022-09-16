function FindEvenPositionElements(params){
    let array =params;
    let resultArray = [];
    for(let i = 0; i < array.length; i+=2){
        resultArray.push(array[i]);
    }
    console.log(resultArray.join(' '));
}



FindEvenPositionElements(['20', '30', '40', '50', '60']);