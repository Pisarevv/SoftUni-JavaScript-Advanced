function ProcessValues(input){
    
    return input.filter((a,i) => i % 2 !== 0)
    .map(x=> x * 2)
    .reverse()
    .join(' ');
}

ProcessValues([3,0,10,4,7,3]);