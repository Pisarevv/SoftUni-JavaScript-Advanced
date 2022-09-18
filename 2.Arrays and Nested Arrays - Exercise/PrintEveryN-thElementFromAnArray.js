function PrintNthElement(inputArray,elementNumber){
    let result = [];
    result = inputArray.filter((x,i) => i%elementNumber == 0);
    return result;
}


PrintNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);