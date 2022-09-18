function RotateArray(arr,rotationCount){
    let lastElement;
    for(let i=0; i< rotationCount; i++){
        lastElement = arr[arr.length-1];
       for(let k = arr.length-1; k > 0 ; k--){ 
        arr[k] = arr[k-1]         
       }
       arr[0] = lastElement;    
    }
    console.log(arr);
}


RotateArray(['1', 
'2', 
'3', 
'4'], 
2
);

RotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);